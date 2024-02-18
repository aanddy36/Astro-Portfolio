import { z, defineCollection, reference } from "astro:content";

const projectSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      githubRepo: z.string().optional(),
      url: z.string(),
      order: z.number(),
      isWork: z.boolean(),
      techsUsed: z.array(reference("logos")),
    }),
});

const logoSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      clas: z.string(),
      position: z.number(),
    }),
});

export const collections = {
  projects: projectSchema,
  logos: logoSchema,
};
