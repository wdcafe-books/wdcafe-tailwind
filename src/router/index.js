import { createRouter, createWebHistory } from 'vue-router'
import IntroLayout from '../layouts/IntroLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Intro from "../views/Intro.vue"
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'
import Lists from '../components/Lists.vue'
import Setup from '../components/Setup.vue'
import Colors from '../components/Colors.vue'
import Customization from '../components/Customization.vue'
import Typography from '../components/Typography.vue'
import SpacesSizes from '../components/SpacesSizes.vue'
import ListProperty from '../components/ListProperty.vue'
import Flex from '../components/Flex.vue'
import Grids from '../components/Grids.vue'
import Layouts from '../components/Layouts.vue'
import Responsive from '../components/Responsive.vue'
import Borders from '../components/Borders.vue'
import EffectsFilters from '../components/EffectsFilters.vue'
import Animations from '../components/Animations.vue'
import DesignSystem from '../components/DesignSystem.vue'
import CoreConcepts from '../components/CoreConcepts.vue'
import DarkMode from '../components/DarkMode.vue' 



const routes = [
  {path: '/', component: Intro, meta: { layout: IntroLayout } },
  {path: '/home', component: Home, meta: { layout: DefaultLayout } },
  {
    path: '/docs',
    component: Docs,
    meta: { layout: DefaultLayout },
    children: [
      {
        path: '',
        component: Lists,
        props: {
          docs: [
            { title: '1. Setup', description: 'Tailwind CSS를 설치하고 설정하는 방법을 안내합니다.', link: '/docs/setup' },
            { title: '2. Colors', description: 'Tailwind CSS에서 색상을 사용하는 방법을 설명합니다.', link: '/docs/colors' },
            { title: '3. Customization', description: 'Tailwind CSS를 커스터마이징하는 방법을 다룹니다.', link: '/docs/customization' },
            { title: '4. Typography', description: '타이포그래피 설정 및 사용법에 대해 설명합니다.', link: '/docs/typography' },
            { title: '5. Spaces & sizes', description: '공간 및 크기를 설정하는 방법을 안내합니다.', link: '/docs/spaces-sizes' },
            { title: '6. List & Property', description: '리스트 및 속성을 설정하는 방법을 안내합니다.', link: '/docs/list-property' },
            { title: '7. Flex', description: 'Flexbox를 사용하여 레이아웃을 구성하는 방법을 설명합니다.', link: '/docs/flex' },
            { title: '8. Grids', description: '그리드 시스템을 사용하여 레이아웃을 구성하는 방법을 다룹니다.', link: '/docs/grids' },
            { title: '9. Layouts', description: '다양한 레이아웃을 구성하는 방법을 안내합니다.', link: '/docs/layouts' },
            { title: '10. Responsive', description: '반응형 디자인을 구성하는 방법을 안내합니다.', link: '/docs/responsive' },
            { title: '11. Border', description: '테두리를 설정하고 사용하는 방법을 설명합니다.', link: '/docs/borders' },
            { title: '12. Effects & filters', description: '효과 및 필터를 적용하는 방법을 다룹니다.', link: '/docs/effects-filters' },
            { title: '13. Animations', description: '애니메이션을 설정하고 사용하는 방법을 안내합니다.', link: '/docs/animations' },
            { title: '14. Design System', description: '디자인 시스템을 구축하고 사용하는 방법을 설명합니다.', link: '/docs/design-system' },
            { title: '15. Core concepts', description: 'Tailwind CSS의 핵심 개념을 다룹니다.', link: '/docs/core-concepts' },
            { title: '16. Dark mode', description: '다크 모드를 설정하고 사용하는 방법을 안내합니다.', link: '/docs/dark-mode' }, 
          ]
        }
      },
      { path: 'setup',  component: Setup },
      { path: 'colors',  component: Colors },
      { path: 'customization',  component: Customization },
      { path: 'typography',  component: Typography },
      { path: 'spaces-sizes',  component: SpacesSizes },
      { path: 'list-property',  component: ListProperty },
      { path: 'flex',  component: Flex },
      { path: 'grids',  component: Grids },
      { path: 'layouts',  component: Layouts },
      { path: 'responsive',  component: Responsive },
      { path: 'borders',  component: Borders },
      { path: 'effects-filters',  component: EffectsFilters },
      { path: 'animations',  component: Animations },
      { path: 'design-system',  component: DesignSystem },
      { path: 'core-concepts',  component: CoreConcepts },
      { path: 'dark-mode',  component: DarkMode },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router