import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, CircularProgress } from '@mui/material';
import axios from '../api/axios';
import TrendystyLogo from '../assets/Trendysty-Logo.png';

export default function About() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axios.get('/pages/our_story');
        setPageData(res.data);
      } catch (error) {
        console.error('Error fetching Our Story page:', error);
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
          Failed to load Our Story page.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4} sx={{ marginTop: '10vh' }} style={{ backgroundColor: '#141C40', color: '#fff' }}>
      <Typography variant="h3" gutterBottom align="center">
        {pageData.title}
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        At Trendysty, elegance meets expression. Discover our philosophy and how we bring luxury fashion to life.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <img
            src={TrendystyLogo}
            alt="Trendysty"
            style={{ width: '150px', borderRadius: '12px' ,filter: "drop-shadow(0 0 5px rgba(255,255,255,0.95))"}}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {pageData.sections.map((section) => (
            <Box key={section.sectionId} mb={4}>
              <Typography variant="h4" gutterBottom>
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
