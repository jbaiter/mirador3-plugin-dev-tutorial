import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

export default function CustomBranding({ targetProps: { t, variant, ...ContainerProps } }) {
  return (
    <div {...ContainerProps}>
      { variant === 'wide' && (
      <div>
        <Typography align="center" component="p" variant="h3">{t('mirador')}</Typography>
      </div>
      )}
      <Typography align="center">
        <IconButton
          component="a"
          href="https://example.com"
          target="_blank"
          rel="noopener"
        >
            <LocalFloristIcon />
        </IconButton>
      </Typography>
    </div>
  );
}