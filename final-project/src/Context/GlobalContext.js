import axios from "axios";
import jsCookie from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [dataJob, setDataJob] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    title: "",
    jobDesc: "",
    jobQual: "",
    jobType: "Onsite",
    jobTenure: "",
    jobStatus: 1,
    companyName: "",
    companyImageUrl: "",
    companyCity: "",
    salaryMin: 0,
    salaryMax: 0,

    // Register & Login
    name: "",
    imageUrl: "",
    email: "",
    password: "",

    // Change Password
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    // Filter
    company_city: "",
    job_type: "",
    job_tenure: "",
  });

  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");

  let dataUser;
  if (jsCookie.get("token")) {
    dataUser = JSON.parse(jsCookie.get("user"));
  } else {
    dataUser = "";
  }

  let history = useHistory();

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );

      let result = data.data;
      setDataJob([...result]);
    };
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  const handleUpdate = (event) => {
    let idJob = parseInt(event.target.value);
    history.push(`/dashboard/list-job-vacancy/form/edit/${idJob}`);
  };

  const handleDelete = (event) => {
    let idJob = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`, {
        headers: {
          Authorization: "Bearer " + jsCookie.get("token"),
        },
      })
      .then(() => {
        let newDataJob = dataJob.filter((el) => {
          return el.id !== idJob;
        });
        setDataJob(newDataJob);
        setFetchStatus(true);
        setAlert("Danger");
        setMessage("Lowongan berhasil dihapus");
        setShow(true);
      });
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then(({ data }) => {
        let fetchSearch = data.data;

        let result = fetchSearch.filter((res) => {
          return res.title.toLowerCase().includes(search.toLowerCase());
        });

        setDataJob([...result]);
        setAlert("Info");
        setMessage("Hasil Pencarian lowongan " + search);
        setShow(true);
        setSearch("");
      });
  };

  const handleFilter = (event) => {
    event.preventDefault();

    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then(({ data }) => {
        let fetchSearch = data.data;

        let result = fetchSearch.filter((res) => {
          return (
            res.company_city.toLowerCase() ==
              input.company_city.toLowerCase() ||
            res.job_type.toLowerCase() == input.job_type.toLowerCase() ||
            res.job_tenure.toLowerCase() == input.job_tenure.toLowerCase()
          );
        });

        setDataJob([...result]);
        setAlert("Info");
        setMessage("Hasil filter lowongan");
        setShow(true);
        setInput("");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let {
      title,
      jobDesc,
      jobQual,
      jobType,
      jobTenure,
      jobStatus,
      companyName,
      companyImageUrl,
      companyCity,
      salaryMin,
      salaryMax,
    } = input;

    if (title !== "") {
      if (jobDesc !== "") {
        if (jobQual !== "") {
          if (jobType !== "") {
            if (jobTenure !== "") {
              if (jobStatus == 0 || jobStatus == 1) {
                if (companyName !== "") {
                  if (companyImageUrl !== "") {
                    if (companyCity !== "") {
                      if (salaryMin !== "" && salaryMin >= 0) {
                        if (salaryMax !== "" && salaryMax >= salaryMin) {
                          if (currentId === null) {
                            axios
                              .post(
                                `https://dev-example.sanbercloud.com/api/job-vacancy`,
                                {
                                  title: title,
                                  job_description: jobDesc,
                                  job_qualification: jobQual,
                                  job_type: jobType,
                                  job_tenure: jobTenure,
                                  job_status: parseInt(jobStatus),
                                  company_name: companyName,
                                  company_image_url: companyImageUrl,
                                  company_city: companyCity,
                                  salary_min: parseInt(salaryMin),
                                  salary_max: parseInt(salaryMax),
                                },
                                {
                                  headers: {
                                    Authorization:
                                      "Bearer " + jsCookie.get("token"),
                                  },
                                }
                              )

                              .then((res) => {
                                let data = res.data;
                                setDataJob([...dataJob, data]);
                                setFetchStatus(true);
                                setAlert("Success");
                                setMessage("Lowongan berhasil ditambahkan");
                                setShow(true);
                                history.push("/dashboard/list-job-vacancy");
                              });
                            setInput({
                              title: "",
                              jobDesc: "",
                              jobQual: "",
                              jobType: "Onsite",
                              jobTenure: "",
                              jobStatus: 1,
                              companyName: "",
                              companyImageUrl: "",
                              companyCity: "",
                              salaryMin: 0,
                              salaryMax: 0,
                            });
                            setCurrentId(null);
                          } else {
                            axios
                              .put(
                                `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
                                {
                                  title: title,
                                  job_description: jobDesc,
                                  job_qualification: jobQual,
                                  job_type: jobType,
                                  job_tenure: jobTenure,
                                  job_status: parseInt(jobStatus),
                                  company_name: companyName,
                                  company_image_url: companyImageUrl,
                                  company_city: companyCity,
                                  salary_min: parseInt(salaryMin),
                                  salary_max: parseInt(salaryMax),
                                },
                                {
                                  headers: {
                                    Authorization:
                                      "Bearer " + jsCookie.get("token"),
                                  },
                                }
                              )
                              .then(() => {
                                let singleDataJob = dataJob.find(
                                  (el) => el.id == currentId
                                );
                                singleDataJob.title = title;
                                singleDataJob.job_description = jobDesc;
                                singleDataJob.job_qualification = jobQual;
                                singleDataJob.job_type = jobType;
                                singleDataJob.job_tenure = jobTenure;
                                singleDataJob.job_status = jobStatus;
                                singleDataJob.company_name = companyName;
                                singleDataJob.company_image_url =
                                  companyImageUrl;
                                singleDataJob.company_city = companyCity;
                                singleDataJob.salary_min = salaryMin;
                                singleDataJob.salary_max = salaryMax;
                                setDataJob([...dataJob]);
                                setFetchStatus(true);
                                setAlert("Info");
                                setMessage("Lowongan berhasil diupdate");
                                setShow(true);
                                history.push("/dashboard/list-job-vacancy/");
                              });
                            setInput({
                              title: "",
                              jobDesc: "",
                              jobQual: "",
                              jobType: "Onsite",
                              jobTenure: "",
                              jobStatus: 1,
                              companyName: "",
                              companyImageUrl: "",
                              companyCity: "",
                              salaryMin: 0,
                              salaryMax: 0,
                            });
                            setCurrentId(null);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const handleSalary = (param) => {
    if (param >= 1000000) {
      return `${param / 1000000} Juta`;
    } else if (param == null) {
      return "";
    } else {
      return param;
    }
  };

  const handleStatus = (param) => {
    if (param === 1) {
      return "Dibuka";
    } else if (param === 0) {
      return "Ditutup";
    } else {
      return "";
    }
  };

  const pemisahRibuan = (num) => {
    if (num !== null) {
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return num_parts.join(".");
    } else {
      return "";
    }
  };

  const state = {
    input,
    setInput,
    dataJob,
    setDataJob,
    currentId,
    setCurrentId,
    dataUser,
    search,
    setFetchStatus,
    alert,
    setAlert,
    show,
    setShow,
    setMessage,
    message,
  };

  const functionHandle = {
    handleChange,
    handleUpdate,
    handleDelete,
    handleSubmit,
    handleChangeSearch,
    handleSalary,
    handleStatus,
    handleSearch,
    handleFilter,
    pemisahRibuan,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        functionHandle,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
