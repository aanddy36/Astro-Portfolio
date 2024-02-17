import { z, defineCollection } from "astro:content";

const projectSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      githubRepo: z.string(),
      url: z.string(),
    }),
});

const logoSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      clas: z.string(),
    }),
});

export const collections = {
  projects: projectSchema,
  logos: logoSchema,
};
