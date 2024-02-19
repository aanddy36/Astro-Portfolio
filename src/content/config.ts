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
      isUsed: z.boolean(),
      position: z.number(),
    }),
});

const certificationsSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    place: z.string(),
    hours: z.number(),
    url: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

const aboutSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      sentence: z.string(),
      icon: image(),
      order:z.number()
    }),
});

export const collections = {
  projects: projectSchema,
  logos: logoSchema,
  certifications: certificationsSchema,
  about: aboutSchema,
};
