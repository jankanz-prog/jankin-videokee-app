import { getBASEURL } from "../common/utility.js";
import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";


const SongPlayer = () => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [error, setError] = useState(null);
    const videoRef = useRef(null);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoUrlRef = useRef(null);
    const oldUrlRef = useRef(null);

    // Memoize apiUrl so it doesn't change on every render
    const apiUrl = useMemo(() => `${getBASEURL()}/getSongToPlay?t=${Date.now()}`, []);

    const fetchNextSongRef = useRef(null);

    const fetchNextSong = useCallback(() => {
      console.log("fetchNextSong called, requesting from:", apiUrl);
      fetch(apiUrl)
        .then((response) => {
          console.log("Response status:", response.status);
          console.log("Content-Type:", response.headers.get("content-type"));
          
          // Handle both 200 OK and 206 Partial Content (range requests for video)
          if (!response.ok && response.status !== 206) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          
          const contentType = response.headers.get("content-type");
          const contentDisposition = response.headers.get("content-disposition");
          console.log("Content-Disposition header:", contentDisposition);
          let filename = null;
          if (contentDisposition) {
            const match = contentDisposition.match(/filename\*?=(?:UTF-8'')?["']?([^;"']+)["']?/i);
            console.log("Regex match result:", match);
            if (match && match[1]) {
              try {
                filename = decodeURIComponent(match[1]);
              } catch (e) {
                filename = match[1];
              }
            }
          }
          console.log("Extracted filename:", filename);
          if (contentType && contentType.includes("video")) {
            console.log("Received video content" + (filename ? ` (filename: ${filename})` : ""));
            return response.blob(); // Get the file as a Blob
          } else {
            // It's JSON (no songs in queue)
            return response.json().then((data) => {
              throw new Error(data.message || "No songs to play");
            });
          }
        })
        .then((blob) => {
          if (!blob || blob.size === 0) {
            throw new Error("Empty blob received from server");
          }
          console.log("Blob received, size:", blob.size);
          
          // Create a local object URL for the blob
          const url = URL.createObjectURL(blob);
          console.log("Video URL created:", url);
          
          // Keep old URL alive until new video plays
          oldUrlRef.current = videoUrlRef.current;
          videoUrlRef.current = url;
          setVideoUrl(url);
          setVideoEnded(false);
        })
        .catch((error) => {
          console.error("Error fetching video:", error);
          console.error("Error details:", error.message);
          setError(error.message);
        });
    }, [apiUrl]);

    // Keep ref updated with latest fetchNextSong
    useEffect(() => {
      fetchNextSongRef.current = fetchNextSong;
    }, [fetchNextSong]);

    useEffect(() => {
      const videoElement = videoRef.current;

      const handleVideoEnd = () => {
        console.log("Video has finished playing!");
        console.log("Revoking blob URL:", videoUrlRef.current);
        
        // Revoke current blob URL to free up memory
        if (videoUrlRef.current) {
          URL.revokeObjectURL(videoUrlRef.current);
          videoUrlRef.current = null;
        }
        
        // Revoke old URL if still exists
        if (oldUrlRef.current) {
          URL.revokeObjectURL(oldUrlRef.current);
          oldUrlRef.current = null;
        }
        
        setVideoUrl(null);
        fetchNextSongRef.current();
      };

      const handleVideoPlay = () => {
        console.log("Video started playing");
        // Safe to revoke old URL now that new one is playing
        if (oldUrlRef.current && oldUrlRef.current !== videoUrlRef.current) {
          URL.revokeObjectURL(oldUrlRef.current);
          oldUrlRef.current = null;
        }
      };

      const handleVideoError = (e) => {
        console.error("Video error:", e);
        setError("Failed to play video");
      };

      if (videoElement) {
        videoElement.addEventListener("ended", handleVideoEnd);
        videoElement.addEventListener("play", handleVideoPlay);
        videoElement.addEventListener("error", handleVideoError);
      }

      // Cleanup listener when component unmounts
      return () => {
        if (videoElement) {
          videoElement.removeEventListener("ended", handleVideoEnd);
          videoElement.removeEventListener("play", handleVideoPlay);
          videoElement.removeEventListener("error", handleVideoError);
        }
      };
    }, []);
    
    // Fetch first song on component mount only
    useEffect(() => {
      fetchNextSongRef.current();
    }, []);

    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement && videoUrl) {
        console.log("Setting video source to:", videoUrl);
        videoElement.src = videoUrl;
        // Don't call load() as it interrupts play requests
        // The autoPlay attribute in JSX will handle playing
      }
    }, [videoUrl]);

    // Cleanup blob URLs when component unmounts
    useEffect(() => {
      return () => {
        console.log("Cleaning up blob URLs on unmount");
        if (videoUrlRef.current) {
          URL.revokeObjectURL(videoUrlRef.current);
          videoUrlRef.current = null;
        }
        if (oldUrlRef.current) {
          URL.revokeObjectURL(oldUrlRef.current);
          oldUrlRef.current = null;
        }
      };
    }, []);
    
    return (
      <div>
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {videoUrl && (
          <video ref={videoRef} width="640" height="480" controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!videoUrl && !error && <p>Loading video...</p>}
      </div>
    );
};

export default SongPlayer;