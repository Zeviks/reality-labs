import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { data } from "autoprefixer";
import { myTheme } from "./theme";
import { StudioNavbar } from "./components";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio", // This is where we're rendering it on the site
  name: "Reality_Labs_Content_Studio",
  title: "Reality Labs Content Studio",
  projectId,
  dataset,

  //Vision Tool allows us to test our queries on the backend
  //Desk Tool is what allows us to add information in the format shown
  plugins: [deskTool(), visionTool()],

  //These are being renderedfrom the schema folder, these allows us

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
