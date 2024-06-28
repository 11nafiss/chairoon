/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import GridBox from "../../../components/shared/GridBox";
import { Avatar, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteRequestsJob,
  FetchQuestId,
  FetchQuestMine,
  UpdateRequestsJob,
} from "../../../redux/slices/app";
import dayjs from "dayjs";
import { DataGrid, gridClasses, GridToolbar } from "@mui/x-data-grid";
import ButtonIcon from "../../../components/shared/button/ButtonIcon";
import { FloppyDisk, PencilSimple, Trash } from "@phosphor-icons/react";
import StackRow from "../../../components/shared/stack/StackRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PageRecruitJobs = ({ activeTab, pageIndex, setActiveTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.app);
  console.log("🚀 ~ PageRecruitJobs ~ currentUser:", currentUser)

  useEffect(() => {
    dispatch(FetchQuestMine({ userId: currentUser._id }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { myJobs } = useSelector((state) => state.app);

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        UpdateRequestsJob({
          _id: data._id,
          isCompleted: data.isCompleted,
        })
      );

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/recruit`);
          window.location.reload();
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
  
  const handleEdit = (id) => {
    console.log("🚀 ~ handleEdit ~ id:", id)
    navigate(`/recruit/edit/${id}`)
    setActiveTab(0)
    dispatch(FetchQuestId({ questId: id}))
  }

  const handleDelete = (id) => {
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
          dispatch(DeleteRequestsJob({ questId: id}))

          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          
          navigate(`/recruit`)
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
        field: "companyLogo",
        headerName: "Logo",
        type: "actions",
        width: 60,
        renderCell: (params) => (
          <StackRow sx={{ height: "100%", alignItems: "center" }}>
            <Avatar src={params.row.photoURL} />
          </StackRow>
        ),
        sortable: false,
        filterable: false,
      },
      { field: "companyName", headerName: "Company", width: 85 },
      { field: "jobPosition", headerName: "Job Position", width: 110 },
      {
        field: "createdAt",
        headerName: "Created At",
        type: "datetime",
        width: 100,
        renderCell: (params) => dayjs(params.row.createdAt).format("DD/MM/YYYY"),
      },
      {
        field: "isCompleted",
        headerName: "Finished?",
        width: 80,
        type: "boolean",
        editable: true,
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
            <ButtonIcon onClick={() => handleEdit(params.row._id)} sx={{ bgcolor: "lightBlue" }}>
              <PencilSimple size={20} weight="bold" />
            </ButtonIcon>
            <ButtonIcon onClick={() => handleDelete(params.row._id)} sx={{ bgcolor: "orange" }}>
              <Trash size={20} weight="bold" />
            </ButtonIcon>
          </StackRow>
        ),
      },
    ],
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== pageIndex}
      id={`vertical-tabpanel-${pageIndex}`}
      aria-labelledby={`vertical-tab-${pageIndex}`}
      style={{ height: "100%" }}
    >
      {activeTab === pageIndex && (
        <StackCol gap={2}>
          <TextTitle>Manage Quest</TextTitle>
          <GridBox gap={2} sx={{ height: "100%", overflow: "hidden" }}>
            <Box sx={{ gridColumn: "span 12", height: "100%" }}>
              <DataGrid
                columns={columns}
                rows={myJobs}
                getRowId={(row) => row._id}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 7,
                    },
                  },
                  sorting: {
                    sortModel: [{ field: "createdAt", sort: "desc" }],
                  },
                }}
                pageSizeOptions={[7]}
                disableRowSelectionOnClick
                disableColumnSelector
                disableDensitySelector
                slots={{
                  toolbar: GridToolbar,
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
                columnVisibilityModel={{
                  _id: false,
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
          </GridBox>
        </StackCol>
      )}
    </div>
  );
};

export default PageRecruitJobs;
