# Some commands used
```
nx g @nrwl/express:application api --frontendProject=next-app

nx run-many --target=serve --projects=api,next-app --parallel=true

nx g @nrwl/react:storybook-configuration store-ui-shared --configureCypress --generateStories

nx run store-ui-shared:storybook

nx run store-ui-shared-e2e:e2e

nx dep-graph

nx g @nrwl/workspace:lib util-interfaces --directory=api

nx g @nrwl/react:lib ui-shared --directory store

nx g @nrwl/react:component header --project=store-ui-shared
```