
import React, { useState, type ChangeEvent } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface UploadedImage {
  file: File;
  preview: string;
}

const MultiImageUploader: React.FC = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleClearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
    setImages([]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((img) => {
      formData.append("images", img.file);
    });

    // send with axios or fetch here
    console.log("Ready to upload:", images);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
      border="2px dashed #ccc"
      borderRadius="16px"
      sx={{
        width: "100%",
        maxWidth: 600,
        bgcolor: "#fafafa",
      }}
    >
      <Typography variant="body1" color="text.secondary" mb={2}>
        Upload one or multiple images
      </Typography>

      <Button
        variant="contained"
        component="label"
        sx={{ mb: 2, borderRadius: "10px" }}
      >
        Select Images
        <input
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleImageChange}
        />
      </Button>

      {images.length > 0 && (
        <>
          {/* Image preview container */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            {images.map((img, index) => (
              <Box
                key={index}
                position="relative"
                sx={{
                  width: 130,
                  height: 130,
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 1,
                  bgcolor: "#fff",
                }}
              >
                <img
                  src={img.preview}
                  alt={`Uploaded ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <IconButton
                  onClick={() => handleRemoveImage(index)}
                  color="error"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    bgcolor: "white",
                    "&:hover": { bgcolor: "error.light", color: "white" },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>

          {/* Action buttons */}
          <Box display="flex" gap={2} mt={3}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearAll}
              sx={{ borderRadius: "10px" }}
            >
              Clear All
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              sx={{ borderRadius: "10px" }}
            >
              Upload All
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MultiImageUploader;
