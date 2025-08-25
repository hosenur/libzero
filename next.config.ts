import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  //
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "catppuccin-macchiato",
    },
  },
});

// Export the final Next.js config with Nextra included
export default withNextra({
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});
