import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, CircularProgress } from '@mui/material';
import axios from '../api/axios'; // Your configured Axios instance

export default function ReturnPolicy() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axios.get('/pages/return_policy');
        setPageData(res.data);
      } catch (error) {
        console.error('Error fetching Return Policy:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  if (!pageData) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <Typography variant="h6" color="error">
          Failed to load Return Policy.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4} sx={{ marginTop: '10vh' }} style={{ backgroundColor: '#141C40', color: '#fff' }}>
      <Typography variant="h3" gutterBottom align="center">
        {pageData.title}
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8} mx="auto">
          {pageData.sections.map((section) => (
            <Box key={section.sectionId} mb={4}>
              <Typography variant="h5" gutterBottom>
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
