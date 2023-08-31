import React from 'react';
import Box from '@mui/material/Box'
import { ISanitizeContent } from '../../utils/interfaces/posts_interfaces'

function SanitizeContent({ content }: ISanitizeContent) {
  const sanitizeContent = (html: string) => {
    html = html.replace(/<img/g, '<img width="250px"');
    return html.replace(/<\/?(p|div|h1)[^>]*>/g, '');
  };

  return <Box dangerouslySetInnerHTML={{ __html: sanitizeContent(content) }} />;
}

export default SanitizeContent;
