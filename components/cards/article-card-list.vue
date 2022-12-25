<template>
  <c-stack spacing="8" my="8">
    <template v-if="articles">
      <template v-for="article in articles" :key="article._id">
        <div :to="article._path">
          <c-grid
            gap="3"
            :template-columns="['1fr', '1fr', 'repeat(4, 1fr)']"
            text-decoration="none"
            :direction="['column', 'column', 'row']"
            :spacing="[null, null, 5]"
          >
            <c-grid-item>
              <chakra.p
                pl="3"
                border-left-color="currentColor"
                border-left-width="1px"
                border-left-style="solid"
                text-style="articles.date"
                align-self="flex-start"
              >
                {{ article.dateFormatted }}
              </chakra.p>
            </c-grid-item>
            <c-grid-item :col-start="[1, 1, 2]" :col-end="5">
              <c-stack>
                <nuxt-link :to="article._path">
                  <chakra.p line-height="1" text-style="articles.title">
                    <chakra.span text-style="anchor">{{
                      article.title
                    }}</chakra.span>
                  </chakra.p>
                </nuxt-link>
                <chakra.p text-style="articles.excerpt">
                  {{ article.excerpt }}
                </chakra.p>
                <nuxt-link :to="article._path">
                  <c-h-stack text-style="articles.link" align-items="center">
                    <chakra.a>Read article</chakra.a>
                    <c-icon name="arrow-forward" />
                  </c-h-stack>
                </nuxt-link>
              </c-stack>
            </c-grid-item>
          </c-grid>
        </div>
      </template>
    </template>
  </c-stack>
</template>

<script lang="ts" setup async>
import { chakra } from "@chakra-ui/vue-next";
import { $dayjs } from "~/utils/dayjs";

const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/articles")
    .where({
      _path: {
        $ne: "/articles",
      },
    })
    .find()
    .then((articles) =>
      articles
        .sort((a, b) => ($dayjs(a.date).isBefore($dayjs(b.date)) ? 1 : -1))
        .map((a) => ({ ...a, dateFormatted: $dayjs(a.date).format("LL") }))
    )
);
</script>
