import React from 'react'
import { RiTeamLine,RiLiveFill,RiArticleFill } from '@remixicon/react'
import PDFNotes from '../Cards/PDFNotes'
import ExpertFaculty from '../Cards/ExpertFaculty'
import LiveClasses from '../Cards/LiveClasses'
import MonthlyTests from '../Cards/MonthlyTests'
import ParentReport from '../Cards/ParentReport'
import WeakTopicAlert from '../Cards/WeakTopicAlert'

const Features = () => {
    return (
        <div
            id="why-section"
            className="scroll-mt-50 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center gap-y-5 gap-x-3 2xl:gap-6"
        >
            <ExpertFaculty />
            <LiveClasses />
            <PDFNotes />
            <MonthlyTests />
            <WeakTopicAlert />
            <ParentReport />

        </div>
    )
}

export default Features