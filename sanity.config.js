import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

export const schemaTypes = [about, brand, contact, experiences, schema, skill, testimonials];

export default defineConfig({
  name: 'default',
  title: 'PORTFOLIO_',

  projectId: 'bg3mfwlp',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
