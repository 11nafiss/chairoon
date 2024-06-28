/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import GridBox from "../../../components/shared/GridBox";
import { AppBar, Avatar, Box, MenuItem, Tab, Tabs } from "@mui/material";
import {
  FetchQuestMine,
  FetchRecruitersJob,
  UpdateAppliedsJob,
  UpdateRequestsJob,
} from "../../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FieldSelect from "../../../components/shared/FieldSelect";
import StackRow from "../../../components/shared/stack/StackRow";
import TextThin from "../../../components/shared/text/TextThin";
import dayjs from "dayjs";
import { DataGrid, gridClasses, GridToolbar } from "@mui/x-data-grid";
import ButtonIcon from "../../../components/shared/button/ButtonIcon";
import { ArrowDown, CheckFat, FilePdf, FloppyDisk, Trash } from "@phosphor-icons/react";
import TextBody from "../../../components/shared/text/TextBody";
import Swal from "sweetalert2";
import { APPLIED_STATUS } from "../../../utils/optionData";

const PageRecruitApc = ({ activeTab, pageIndex }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchQuestMine({ userId: currentUser._id }));
    dispatch(FetchRecruitersJob({ userId: currentUser._id }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { myJobs } = useSelector((state) => state.app);
  const { userApplieds } = useSelector((state) => state.app);
  const [filteredUserApplieds, setFilteredUserApplieds] = useState(userApplieds);

  const [selectedJobPosition, setSelectedJobPosition] = React.useState(null);
  const [selectedRecruitFlow, setSelectedRecruitFlow] = React.useState(``);

  const handleJobPositionChange = (event) => {
    setSelectedJobPosition(event.target.value);
  };

  const handleRecruitFlowChange = (event, newValue) => {
    setSelectedRecruitFlow(newValue);
  };

  useEffect(() => {
    let filteredData = userApplieds;
    if (selectedJobPosition) {
      filteredData = filteredData.filter(
        (userApplied) => userApplied.jobId.jobPosition === selectedJobPosition.jobPosition
      );
      setSelectedRecruitFlow(`${selectedJobPosition.recruitFlow[0]}`);
    }
    setFilteredUserApplieds(filteredData);
  }, [selectedJobPosition, userApplieds]);

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== pageIndex}
      id={`vertical-tabpanel-${pageIndex}`}
      aria-labelledby={`vertical-tab-${pageIndex}`}
      style={{ height: "100%" }}
    >
      {activeTab === pageIndex && (
        <StackCol gap={2} sx={{ overflow: "hidden" }}>
          <TextTitle>Applicant Data</TextTitle>
          <GridBox gap={2}>
            <Box sx={{ gridColumn: "span 7" }}>
              <FieldSelect
                fullWidth
                sx={{ mt: "5px" }}
                defaultValue={0}
                onChange={handleJobPositionChange}
              >
                <MenuItem value={0} disabled sx={{ display: "none" }}>
                  Select Available Job
                </MenuItem>
                {myJobs.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    <StackRow>
                      <TextThin>{`${value.jobPosition}`}</TextThin>
                      <Box sx={{ flexGrow: 1 }} />
                      <TextThin>{`${dayjs(value.createdAt).format(
                        "DD/MM/YYYY"
                      )}`}</TextThin>
                    </StackRow>
                  </MenuItem>
                ))}
              </FieldSelect>
            </Box>
            <Box sx={{ gridColumn: "span 12" }}>
              <AppBar position="static" sx={{ bgcolor: "#f0f0f0", mb: "10px" }}>
                <Tabs
                  value={selectedRecruitFlow}
                  onChange={handleRecruitFlowChange}
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  sx={{ "& .MuiTabs-flexContainer": { justifyContent: "start" } }}
                >
                  {selectedJobPosition !== null
                    ? selectedJobPosition.recruitFlow.map((value, index) => (
                        <Tab
                          key={index}
                          value={`${value}`}
                          label={`${value}`}
                          {...a11yProps(index)}
                        />
                      ))
                    : null}
                </Tabs>
              </AppBar>
            </Box>
          </GridBox>
          {selectedJobPosition !== null &&
            selectedJobPosition.recruitFlow.map((value, index) =>
              selectedRecruitFlow === value ? (
                <TabPanel
                  key={index}
                  index={index}
                  filteredUserApplieds={filteredUserApplieds}
                  selectedJobPosition={selectedJobPosition}
                  selectedRecruitFlow={selectedRecruitFlow}
                />
              ) : null
            )}
          {selectedJobPosition === null && myJobs.length !== 0 && (
            <TextTitle>Select the job First</TextTitle>
          )}
          {selectedJobPosition === null && myJobs.length === 0 && (
            <TextTitle>Create your job First</TextTitle>
          )}
        </StackCol>
      )}
    </div>
  );
};

export default PageRecruitApc;

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const {
    index,
    filteredUserApplieds,
    selectedJobPosition,
    selectedRecruitFlow,
    ...other
  } = props;

  const [newData, setNewData] = useState([]);
  console.log("🚀 ~ TabPanel ~ newData:", newData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let filteredData = filteredUserApplieds;
    if (selectedRecruitFlow) {
      filteredData = filteredData.filter(
        (userApplied) => userApplied.recruitStatus === selectedRecruitFlow
      );
    }
    setNewData(filteredData);
  }, [selectedRecruitFlow, filteredUserApplieds, index]);

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        UpdateAppliedsJob({
          _id: data._id,
          appliedStatus: APPLIED_STATUS[1],
          recruitStatus: data.recruitStatus,
        })
      );

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setNewData({
            recruitStatus: data.recruitStatus,
          });
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating!",
        icon: "error",
      });
    }
  };

  const handleAccepted = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(
            UpdateAppliedsJob({
              _id: data._id,
              appliedStatus: APPLIED_STATUS[2],
              recruitStatus: "accepted",
            })
          );

          await dispatch(
            UpdateRequestsJob({
              _id: data.jobId._id,
              recruitFlow: [...data.jobId.recruitFlow, "accepted"],
            })
          );

          Swal.fire("Success!", "User has been accepted.", "success");

          navigate(`/recruit`);
          window.location.reload();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while updating!",
            icon: "error",
          });
        }
      }
    });
  };

  const handleDelete = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(
            UpdateAppliedsJob({
              _id: data._id,
              appliedStatus: APPLIED_STATUS[3],
              recruitStatus: "rejected",
            })
          );

          await dispatch(
            UpdateRequestsJob({
              _id: data.jobId._id,
              recruitFlow: [...data.jobId.recruitFlow, "rejected"],
            })
          );

          Swal.fire("Deleted!", "User has been rejected.", "success");

          navigate(`/recruit`);
          window.location.reload();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting!",
            icon: "error",
          });
        }
      }
    });
  };

  const columns = useMemo(
    () => [
      { field: "_id", hide: true, filterable: false },
      {
        field: "applicantId.avatar",
        headerName: "Logo",
        type: "actions",
        width: 60,
        renderCell: (params) => (
          <StackRow sx={{ height: "100%", alignItems: "center" }}>
            <Avatar src={params.row.applicantId.avatar} />
          </StackRow>
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: "applicantName",
        headerName: "Name",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.firstName || ''} ${row.applicantId.lastName || ''}`;
        },
        renderCell: (params) => (
          <StackRow sx={{ height: "100%", alignItems: "center" }}>
            <TextBody>{`${params.row.applicantId.firstName} ${params.row.applicantId.lastName}`}</TextBody>
          </StackRow>
        ),
      },
      {
        field: "applicantResume",
        headerName: "CV",
        type: "actions",
        width: 50,
        renderCell: (params) => (
          <StackRow gap={1} sx={{ height: "100%", alignItems: "center" }}>
            <ButtonIcon
              onClick={() => navigate(`/ch/${params.row.applicantId.username}/resume`)}
            >
              <FilePdf size={20} weight="bold" />
            </ButtonIcon>
          </StackRow>
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: "jobPosition",
        headerName: "Job Position",
        width: 120,
        valueGetter: (value, row) => {
          return `${row.jobId.jobPosition || ''}`;
        },
        renderCell: (params) => (
          <StackRow sx={{ height: "100%", alignItems: "center" }}>
            <TextBody>{`${params.row.jobId.jobPosition}`}</TextBody>
          </StackRow>
        ),
        filterable: false,
      },
      {
        field: "companyName",
        headerName: "Company Name",
        width: 120,
        valueGetter: (value, row) => {
          return `${row.jobId.companyName || ''}`;
        },
        renderCell: (params) => (
          <StackRow sx={{ height: "100%", alignItems: "center" }}>
            <TextBody>{`${params.row.jobId.companyName}`}</TextBody>
          </StackRow>
        ),
        filterable: false,
      },
      {
        field: "recruitStatus",
        headerName: "Status",
        width: 150,
        type: "singleSelect",
        valueOptions: selectedJobPosition.recruitFlow,
        editable: true,
        filterable: false,
        renderCell: (params) => (
          <StackRow
            sx={{
              height: "100%",
              alignItems: "center",
              border: "2px solid #858585",
              px: "5px",
            }}
          >
            <TextBody>{`${params.row.recruitStatus}`}</TextBody>
            <Box sx={{ flexGrow: 1 }} />
            <ArrowDown size={18} weight="bold" />
          </StackRow>
        ),
      },
      {
        field: "dateOfApplication",
        headerName: "Date Applied",
        type: "datetime",
        width: 120,
        filterable: false,
        renderCell: (params) => dayjs(params.row.dateOfApplication).format("DD/MM/YYYY"),
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => (
          <StackRow gap={1} sx={{ height: "100%", alignItems: "center" }}>
            <ButtonIcon onClick={() => onSubmit(params.row)} sx={{ bgcolor: "yellow" }}>
              <FloppyDisk size={20} weight="bold" />
            </ButtonIcon>
            <ButtonIcon
              onClick={() => handleAccepted(params.row)}
              sx={{ bgcolor: "lightGreen" }}
            >
              <CheckFat size={20} weight="bold" />
            </ButtonIcon>
            <ButtonIcon
              onClick={() => handleDelete(params.row)}
              sx={{ bgcolor: "orange" }}
            >
              <Trash size={20} weight="bold" />
            </ButtonIcon>
          </StackRow>
        ),
      },
      {
        field: "email",
        headerName: "Email",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.email || ''}`;
        },
      },
      {
        field: "headline",
        headerName: "Headline",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.headline || ''}`;
        },
      },
      {
        field: "location",
        headerName: "Location",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.city || ''} ${row.applicantId.country || ''}`;
        },
      },
      {
        field: "gender",
        headerName: "Gender",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.gender || ''}`;
        },
      },
      {
        field: "religion",
        headerName: "Religion",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.religion || ''}`;
        },
      },
      {
        field: "birthday",
        headerName: "Birthday",
        width: 150,
        valueGetter: (value, row) => {
          return `${dayjs(row.applicantId.birthday).format("DD MMMM YYYY") || ''}`;
        },
      },
      {
        field: "skills",
        headerName: "Skills",
        width: 150,
        valueGetter: (value, row) => {
          return `${row.applicantId.skills || ''}`;
        },
      },
    ],
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      role="tabpanel"
      hidden={selectedRecruitFlow !== selectedJobPosition.recruitFlow[index]}
      {...other}
      style={{ height: "100%" }}
    >
      {selectedRecruitFlow === selectedJobPosition.recruitFlow[index] && (
        <Box sx={{ height: "100%" }}>
          <DataGrid
            columns={columns}
            rows={newData}
            getRowId={(row) => row._id}
            columnVisibilityModel={{
              _id: false,
              email: false,
              location: false,
              gender: false,
              religion: false,
              birthday: false,
              headline: false,
              skills: false,
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 4,
                },
              },
              sorting: {
                sortModel: [{ field: "dateOfApplication", sort: "desc" }],
              },
            }}
            pageSizeOptions={[4]}
            disableRowSelectionOnClick
            disableColumnSelector
            disableDensitySelector
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            sx={{
              bgcolor: "#f1f3f4",
              border: "2px solid #858585",
              borderRadius: "10px",
              [`& .${gridClasses.row}`]: {
                bgcolor: "#f1f3f4",
              },
              [`& .${gridClasses.columnHeader}`]: {
                bgcolor: "#f1f3f4",
              },
              [`& .${gridClasses.toolbarContainer}`]: {
                padding: 0,
              },
              [`& .${gridClasses.footerContainer}`]: {
                height: "30px",
              },
            }}
          />
        </Box>
      )}
    </div>
  );
}
