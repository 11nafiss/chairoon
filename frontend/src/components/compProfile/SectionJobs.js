import React from "react";
import StackCol from "../shared/stack/StackCol";
import TextTitle from "../shared/text/TextTitle";

const SectionJobs = (props) => {
  const { activeTab, index } = props;

  return (
    <div role="tabpanel" hidden={activeTab !== index}>
      {activeTab === index && (
        <StackCol gap={2}>
          <TextTitle>Jobs</TextTitle>
        </StackCol>
      )}
    </div>
  );
};

export default SectionJobs;

// function TabPanel(props) {
//   const { value, index } = props;

//   return (
//     <div role="tabpanel" hidden={value !== index}>
//       {value === index && (
//         <Box
//           sx={{
//             p: 0,
//             height: "100%",
//             backgroundColor: "yellow",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <TextBody>2e12eadffasfcw</TextBody>
//         </Box>
//       )}
//     </div>
//   );
// }
