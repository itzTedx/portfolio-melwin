import adobeXd from '/public/svg/skills/adobe-xd.svg'
import adobeaudition from '/public/svg/skills/adobeaudition.svg'
import afterEffects from '/public/svg/skills/after-effects.svg'

import blender from '/public/svg/skills/blender.svg'
import bootstrap from '/public/svg/skills/bootstrap.svg'
import css from '/public/svg/skills/css.svg'
import figma from '/public/svg/skills/figma.svg'
import git from '/public/svg/skills/git.svg'
import html from '/public/svg/skills/html.svg'
import illustrator from '/public/svg/skills/illustrator.svg'
import javascript from '/public/svg/skills/javascript.svg'
import lightroom from '/public/svg/skills/lightroom.svg'

import microsoftoffice from '/public/svg/skills/microsoftoffice.svg'
import mongoDB from '/public/svg/skills/mongoDB.svg'
import mysql from '/public/svg/skills/mysql.svg'
import nextJS from '/public/svg/skills/nextJS.svg'

import photoshop from '/public/svg/skills/photoshop.svg'

import premierepro from '/public/svg/skills/premierepro.svg'

import react from '/public/svg/skills/react.svg'

import tailwind from '/public/svg/skills/tailwind.svg'
import typescript from '/public/svg/skills/typescript.svg'

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase()
  switch (skillID) {
    case 'html':
      return html
    case 'photoshop':
      return photoshop

    case 'illustrator':
      return illustrator
    case 'adobe xd':
      return adobeXd
    case 'after effects':
      return afterEffects
    case 'css':
      return css

    case 'javascript':
      return javascript
    case 'next js':
      return nextJS

    case 'react':
      return react

    case 'typescript':
      return typescript

    case 'bootstrap':
      return bootstrap

    case 'mongodb':
      return mongoDB
    case 'mysql':
      return mysql

    case 'tailwind':
      return tailwind

    case 'adobe audition':
      return adobeaudition

    case 'git':
      return git

    case 'lightroom':
      return lightroom

    case 'premiere pro':
      return premierepro

    case 'blender':
      return blender

    case 'figma':
      return figma

    case 'microsoft office':
      return microsoftoffice

    default:
      break
  }
}
