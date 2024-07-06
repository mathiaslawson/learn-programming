import { createClient } from 'contentful';

const client = createClient({
    space: 'h9xoga78agw3',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'QJ2o85JNWFLfPz5TtHZArXz9epU2t8ngi7Ijq4zE9bc'
});

export const fetchEntry = async (entryId) => {
  try {
    const entry = await client.getEntry(entryId);
    return entry.fields.codeSnippets;
  } catch (error) {
    console.error(`Error fetching entry with ID ${entryId}:`, error);
    return null;
  }
};

export default client;
