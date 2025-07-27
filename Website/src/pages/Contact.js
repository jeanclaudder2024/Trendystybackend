import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, CircularProgress } from '@mui/material';
import { Phone, Mail } from 'lucide-react';
import axios from '../api/axios'; // Your configured Axios instance

function Contact() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await axios.get('/pages/contact_us');
        setPageData(res.data);
      } catch (error) {
        console.error('Error fetching Contact page:', error);
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
          Failed to load Contact page.
        </Typography>
      </Box>
    );
  }

  const emailSection = pageData.sections.find((s) => s.sectionId === 'email');
  const phoneSection = pageData.sections.find((s) => s.sectionId === 'phone');
  const introSection = pageData.sections.find((s) => s.sectionId === 'introduction');
  const availabilitySection = pageData.sections.find((s) => s.sectionId === 'availability');

  return (
    <Box p={4} sx={{ marginTop: '10vh' }} style={{ backgroundColor: '#141C40', color: '#fff' }}>
      <Typography variant="h3" gutterBottom align="center">
        {pageData.title}
      </Typography>

      {introSection && (
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          {introSection.content}
        </Typography>
      )}

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8} mx="auto">
          <Typography variant="h4" gutterBottom>
            How To Reach Us
          </Typography>

          {emailSection && (
            <Typography variant="body1" paragraph>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail color="#99161D" /> Email:{' '}
                <a href={`mailto:${emailSection.content}`} style={{ color: '#99161D' }}>
                  {emailSection.content}
                </a>
              </div>
            </Typography>
          )}

          {phoneSection && (
            <Typography variant="body1" paragraph>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone color="#99161D" /> Phone: {phoneSection.content}
              </div>
            </Typography>
          )}

          {availabilitySection && (
            <Typography variant="body1" paragraph>
              {availabilitySection.content}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
