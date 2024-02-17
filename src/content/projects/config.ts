import { z, defineCollection } from "astro:content";

const projectSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      cover: image(),
      githubRepo: z.string(),
      url: z.string(),
    }),
});

export const collections = {
  projects: projectSchema,
};
