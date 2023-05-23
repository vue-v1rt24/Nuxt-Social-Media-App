import { MediaFiles } from '@prisma/client';

export const mediaFileTransformer = (mediaFile: MediaFiles) => {
  return {
    id: mediaFile.id,
    url: mediaFile.url,
  };
};
