# Use a base image with Python and necessary build dependencies
FROM python:3.9-slim

# Install system dependencies needed for building Matplotlib
RUN apt-get update && apt-get install -y --no-install-recommends \
    libx11-dev libxtst-dev libxrender-dev libxext-dev \
    libpng-dev libfreetype6-dev

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .
COPY starthack2024-firebase-adminsdk-jupxu-5a3edb365a.json .
COPY API_KEY.txt .
COPY logs.json .

# Install dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python script into the container
COPY index.py .

# Command to run the Python script
CMD ["python", "index.py"]
