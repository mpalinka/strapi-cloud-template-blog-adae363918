module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Ustaw tryb na development, jeśli NODE_ENV jest ustawione na 'development'
  ...(process.env.NODE_ENV === 'development' && { 
    devMode: true 
  }),
});
