import React from 'react'
import StackCol from '../shared/stack/StackCol'
import TextTitle from '../shared/text/TextTitle'

const SectionSaved = ({ user, activeTab, index }) => {
  return (
    <div role="tabpanel" hidden={activeTab !== index}>
      {activeTab === index && (
        <StackCol gap={2}>
          <TextTitle>Saved</TextTitle>
        </StackCol>
      )}
    </div>
  )
}

export default SectionSaved