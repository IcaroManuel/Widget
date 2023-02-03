import { useState } from "react";

import { CloseButton } from "../CloseButton";
import BugImageUrl from '../../assets/bug.svg'
import IdeaImageUrl from '../../assets/idea.svg'
import ThoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  Bug: {
    title: 'Problema',
    image: {
      source: BugImageUrl,
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaImageUrl,
      alt: 'imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImageUrl,
      alt: 'imagem de uma nuvem'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeefbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className='text-xl leading-6'>Deixe seu Feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeefbackType} />
      ) : (
        <p>Hello World</p>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito por <a className='underline underline-offser-2' href="https://github.com/IcaroManuel">Icaro</a>
      </footer>
    </div>
  )
}