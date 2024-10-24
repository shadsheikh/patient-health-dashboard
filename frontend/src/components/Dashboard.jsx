import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import ChatIcon from "../assets/chat.svg?react";
import CartIcon from "../assets/cart.svg?react";
import MoneyIcon from "../assets/money.svg?react";
import PeopleIcon from "../assets/people.svg?react";
import RoundIcon from "../components/RoundIcon";
import user from "../assets/user.jpg";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
} from "@windmill/react-ui";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [patients, setPatients] = useState([]);

  const fetchInfo = async () => {
    return fetch("http://localhost:3000/patients")
      .then((res) => res.json())
      .then((d) => setPatients(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const resultsPerPage = 10;
  const totalResults = patients.length;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setData(patients.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, patients]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Patient" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Treatment Plan</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((patient, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={user}
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold">{patient.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{patient.age}</span>
                </TableCell>
                <TableCell>
                  <Badge type={patient.status}>{patient.condition}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{patient.treatmentPlan}</span>
                </TableCell>
                <div className="px-6 my-6">
                  <Link
                    to={`/authorization/${patient._id}`}
                    className="text-blue-500"
                  >
                    <Button>Auth Request</Button>
                  </Link>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Dashboard;
