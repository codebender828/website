<template>
  <c-stack
    rounded="2xl"
    border-width="2px"
    border-color="blackAlpha.50"
    border-style="solid"
    px="6"
    py="4"
    backdrop-filter="saturate(120%) blur(5px)"
    spacing="5"
  >
    <c-stack spacing="4">
      <chakra.h4 text-style="display.xs"> Open Source </chakra.h4>
      <c-h-stack
        v-for="(project, i) in opensourceProjects"
        :key="i"
        align-items="flex-start"
      >
        <c-circle
          p="1"
          bg="gray.50"
          border-width="1px"
          border-color="blackAlpha.100"
          border-style="solid"
        >
          <chakra.a
            text-decoration="none"
            :href="project.website"
            target="_blank"
          >
            <c-aspect-ratio
              :ratio="1"
              w="10"
              rounded="full"
              overflow="hidden"
              border-width="1px"
              border-color="blackAlpha.100"
              border-style="solid"
            >
              <chakra.img :src="project.logo" />
            </c-aspect-ratio>
          </chakra.a>
        </c-circle>
        <c-stack spacing="1" w="full">
          <chakra.a
            text-decoration="none"
            :href="project.website"
            target="_blank"
            text-style="anchor"
            w="fit-content"
          >
            <chakra.p
              font-weight="500"
              font-size="text.sm"
              display="inline-block"
            >
              {{ project.name }}
            </chakra.p>
          </chakra.a>
          <c-h-stack
            justify-content="space-between"
            align-items="center"
            w="full"
          >
            <chakra.p font-size="sm" font-weight="bold" color="gray.500">{{
              project.position
            }}</chakra.p>
            <chakra.p font-size="xs" color="gray.400">
              {{ project.startDate }} <chakra.span>—</chakra.span>
              {{ project.endDate }}
            </chakra.p>
          </c-h-stack>
          <chakra.p font-size="sm" color="gray.500">
            {{ project.description }}
          </chakra.p>
        </c-stack>
      </c-h-stack>
    </c-stack>
    <c-stack spacing="4">
      <chakra.h4 text-style="display.xs"> Companies </chakra.h4>
      <c-h-stack
        v-for="(company, i) in companies"
        :key="i"
        align-items="flex-start"
      >
        <c-circle
          p="1"
          bg="gray.50"
          border-width="1px"
          border-color="blackAlpha.100"
          border-style="solid"
        >
          <chakra.a
            text-decoration="none"
            :href="company.website"
            target="_blank"
          >
            <c-aspect-ratio
              :ratio="1"
              w="10"
              rounded="full"
              overflow="hidden"
              border-width="1px"
              border-color="blackAlpha.100"
              border-style="solid"
            >
              <chakra.img :src="company.logo" />
            </c-aspect-ratio>
          </chakra.a>
        </c-circle>
        <c-stack spacing="0" w="full">
          <chakra.a
            text-decoration="none"
            :href="company.website"
            target="_blank"
            text-style="anchor"
            w="fit-content"
          >
            <chakra.p
              font-weight="500"
              font-size="text.sm"
              display="inline-block"
            >
              {{ company.name }}
            </chakra.p>
          </chakra.a>
          <c-h-stack
            justify-content="space-between"
            align-items="center"
            w="full"
          >
            <chakra.p font-size="sm" color="gray.500">{{
              company.position
            }}</chakra.p>
            <chakra.p font-size="xs" color="gray.400">
              {{ company.startDate }} <chakra.span>—</chakra.span>
              {{ company.endDate }}
            </chakra.p>
          </c-h-stack>
        </c-stack>
      </c-h-stack>
    </c-stack>
  </c-stack>
</template>

<script lang="ts" setup>
import { chakra } from "@chakra-ui/vue-next";

const $img = useImage();

interface Company {
  name: string;
  logo: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
}

interface OpenSourceProject {
  name: string;
  logo: string;
  position: string;
  website: string;
  github: string;
  description: string;
  startDate: string;
  endDate: string;
}

const opensourceProjects: OpenSourceProject[] = [
  {
    name: "Chakra UI",
    logo: "/assets/logos/chakra-ui-logo.png",
    position: "Author, Chakra UI Vue",
    website: "https://vue.chakra-ui.com",
    github: "https://github.com/chakra-ui/chakra-ui-vue-next",
    description:
      "Accessible, Composable and Themeable UI Components for Vue.js. Currently building v2",
    startDate: "May 2020",
    endDate: "Present",
  },
  {
    name: "Mirror World Smart SDK",
    logo: "/assets/logos/mirrorworld-logo.png",
    position: "Core maintainer",
    website: "https://docs.mirrorworld.fun",
    github: "https://github.com/mirrorworld-universe",
    description:
      "Cross-platform Web 3 SDKs and APIs for accelerating Web 3 dApp development.",
    startDate: "May 2020",
    endDate: "Present",
  },
  {
    name: "Nuxt.js MDX Module",
    logo: "/assets/logos/mdx-logo.png",
    position: "Module Author",
    website: "https://mdx.nuxtjs.org",
    github: "https://github.com/nuxt-community/mdx-module",
    description:
      "Markdown for the Vue/Nuxt component era. MDX allows you to use JSX in your markdown content.",
    startDate: "April 2020",
    endDate: ":)",
  },
  {
    name: "Nuxt.js Emotion Module",
    logo: "/assets/logos/emotion-logo.png",
    position: "Module Contributor",
    website: "https://emotion.sh/",
    github: "https://github.com/nuxt-community/emotion-module",
    description:
      "This module extends Emotion to allow developres to author css styles with JavaScript in their Nuxt.js Apps",
    startDate: "February 2020",
    endDate: ":)",
  },
];

const companies: Company[] = [
  {
    name: "Mirror World",
    logo: "/assets/logos/mirrorworld-logo.png",
    position: "Co-founder, CTO",
    website: "https://mirrorworld.fun",
    startDate: "December 2021",
    endDate: "March 2023",
  },
  {
    name: "Xtellar",
    logo: "/assets/logos/xtellar-logo.png",
    position: "Founder, Chief Intern",
    website: "https://xtellar.co",
    startDate: "September 2021",
    endDate: "Present",
  },
  {
    name: "rct AI",
    logo: "/assets/logos/rct-ai-logo.png",
    position: "Sr. Software Engineer",
    website: "https://rct.ai",
    startDate: "July 2021",
    endDate: "December 2021",
  },
  {
    name: "Akkadu",
    logo: "/assets/logos/akkadu-logo.png",
    position: "Co-founder, CTO",
    website: "https://akkadu.com",
    startDate: "February 2018",
    endDate: "June 2021",
  },
  {
    name: "Phaneroo",
    logo: "/assets/logos/phaneroo-logo.png",
    position: "SWE Contributor",
    website: "https://phaneroo.org",
    startDate: "February 2015",
    endDate: "Present",
  },
  {
    name: "A23 Labs",
    logo: "/assets/logos/a23-labs-logo.png",
    position: "UI/UX Designer",
    website: "https://a23labs.com",
    startDate: "February 2015",
    endDate: "September 2015",
  },
];
</script>
