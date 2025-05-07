#!/bin/bash
    cd /app/preview
    nohup npm run dev -- --host 0.0.0.0 --port 3000 > /data/astro_stdout.log 2> /data/astro_stderr.log &
    echo $! > /data/astro_pid.txt
    echo "Astro server started with PID $(cat /data/astro_pid.txt)"
    