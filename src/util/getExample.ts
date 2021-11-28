import {readdirSync, readFileSync} from 'fs';
import path from 'path';
import matter from 'gray-matter';

const exampleDir = path.join(process.cwd(), 'content');

export interface Example {
  content: string;
  code: string;
  meta: {
    title: string;
    description: string;
    slug: string;
  };
}

export function getExampleBySlug(slug: string): Example {
  const dir = path.join(exampleDir, slug);
  const contentPath = path.join(dir, 'description.md');
  const codePath = path.join(dir, 'example.ts');

  const code = readFileSync(codePath, 'utf8');

  const {data, content} = matter.read(contentPath);

  return {
    content: content.trim(),
    code: code.trim(),
    meta: {...(data as Example['meta']), slug},
  };
}

export function getExampleMetadata(slug: string): Example['meta'] {
  const dir = path.join(exampleDir, slug);
  const contentPath = path.join(dir, 'description.md');

  const {data} = matter.read(contentPath);
  data.slug = slug;
  return data as Example['meta'];
}

export function getAllSlugs(): string[] {
  return readdirSync(exampleDir, {withFileTypes: true})
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

export function getAllExampleMetadata(): Example['meta'][] {
  return readdirSync(exampleDir, {withFileTypes: true})
    .filter(f => f.isDirectory())
    .map(d => getExampleMetadata(d.name));
}
