import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

const DetailJob = () => {
  let { idJob } = useParams();
  let { functionHandle } = useContext(GlobalContext);

  let { handleSalary, handleStatus } = functionHandle;

  const [detailJob, setDetailJob] = useState({});

  useEffect(() => {
    if (idJob !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`)
        .then((res) => {
          let x = res.data;
          setDetailJob({
            title: x.title,
            jobDesc: x.job_description,
            jobQual: x.job_qualification,
            jobType: x.job_type,
            jobTenure: x.job_tenure,
            jobStatus: x.job_status,
            companyName: x.company_name,
            companyImageUrl: x.company_image_url,
            companyCity: x.company_city,
            salaryMin: x.salary_min,
            salaryMax: x.salary_max,
          });
        })
        .catch(() => {
          setDetailJob(null);
        });
    }
  }, []);

  let detail = [];
  if (detailJob !== null) {
    detail = [
      { title: "Deskripsi Pekerjaan", desc: detailJob.jobDesc },
      { title: "Kualifikasi", desc: detailJob.jobQual },
      { title: "Tipe Pekerjaan", desc: detailJob.jobType },
      { title: "Job Tenure", desc: detailJob.jobTenure },
      {
        title: "Status Pekerjaan",
        desc: handleStatus(detailJob.jobStatus),
      },
      {
        title: "Gaji ",
        desc: `${handleSalary(detailJob.salaryMin)} - ${handleSalary(
          detailJob.salaryMax
        )}`,
      },
    ];
  }

  return (
    <>
      {detailJob !== null && (
        <div class="bg-neutral-400 max-w-full w-3/5 mx-auto mt-32 mb-10 shadow overflow-hidden sm:rounded-lg shadow-xl">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Lowongan Pekerjaan "{detailJob.title}"
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-white">
              Detail dan Informasi Lowongan perusahaan "{detailJob.companyName}"
            </p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-white-200">
                <dt class="text-sm font-medium text-gray-500 p-auto">
                  Logo Perusahaan
                </dt>
                <dd class="mt-1 sm:mt-0 sm:col-span-2">
                  <img
                    src={detailJob.companyImageUrl}
                    height="100"
                    width="100"
                    alt={detailJob.companyName}
                  />
                </dd>
              </div>
              {detail.map((item, idx) => (
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-white-200">
                  <dt key={idx} class="text-sm font-medium text-gray-500">
                    {item.title}
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {item.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
      {detailJob === null && <p className="mt-80">Data tidak ditemukan</p>}
    </>
  );
};

export default DetailJob;
