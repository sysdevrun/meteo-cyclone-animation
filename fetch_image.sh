#!/bin/bash

# Configuration
IMAGE_URL="http://www.meteo.fr/temps/domtom/La_Reunion/webcmrs9.0/francais/tpsreel/trajectoire.png"
BASE_DIR="$(dirname "$0")/images"
JSON_FILE="$(dirname "$0")/images.json"

# Create base directory if it doesn't exist
mkdir -p "$BASE_DIR"

# Get current date and time
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H-%M-%S)
TIMESTAMP=$(date +%s)

# Create daily directory
DAY_DIR="$BASE_DIR/$DATE"
mkdir -p "$DAY_DIR"

# Download image with timestamp
IMAGE_FILE="$DAY_DIR/${TIME}.png"
echo "Fetching image from $IMAGE_URL..."
if curl -f -s -o "$IMAGE_FILE" "$IMAGE_URL"; then
    echo "Successfully downloaded image to $IMAGE_FILE"
else
    echo "Failed to download image"
    exit 1
fi

# Generate JSON with all existing files
generate_json() {
    echo "Generating JSON index..."

    # Start JSON array
    echo "[" > "$JSON_FILE"

    first=true
    # Find all PNG files in the images directory
    find "$BASE_DIR" -type f -name "*.png" -printf "%T@ %p\n" | sort -n | while read -r mtime filepath; do
        # Extract date and time from path
        filename=$(basename "$filepath")
        dirname=$(basename "$(dirname "$filepath")")

        # Parse date and time
        date_part="$dirname"
        time_part="${filename%.png}"

        # Convert to readable format
        download_date="${date_part} ${time_part//-/:}"

        # Get relative path
        rel_path="${filepath#$BASE_DIR/}"

        # Add comma if not first element
        if [ "$first" = false ]; then
            echo "," >> "$JSON_FILE"
        fi
        first=false

        # Write JSON object
        printf '  {\n    "path": "images/%s",\n    "date": "%s",\n    "timestamp": %d\n  }' \
            "$rel_path" "$download_date" "${mtime%.*}" >> "$JSON_FILE"
    done

    # Close JSON array
    echo "" >> "$JSON_FILE"
    echo "]" >> "$JSON_FILE"

    echo "JSON index generated at $JSON_FILE"
}

generate_json
