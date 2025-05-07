#!/bin/bash
    if [ -f /data/astro_pid.txt ]; then
        PID=$(cat /data/astro_pid.txt)
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            echo "Stopped Astro server with PID $PID"
        else
            echo "Astro server with PID $PID is not running"
        fi
        rm /data/astro_pid.txt
    else
        echo "No Astro server PID file found"
    fi
    