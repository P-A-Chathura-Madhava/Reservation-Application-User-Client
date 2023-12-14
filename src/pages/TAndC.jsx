import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAndC = () => {
  return (
    <div id="tandc" className="container py-5">
      <div className="tc_header_container">
        <h1>Terms & Conditions</h1>
      </div>
      <div className="tc_subtitle">
        <h4>
          GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE SEAT
          RESERVATION SERVICE OF SRI LANKA RAILWAYS.
        </h4>
      </div>
      <div className="content mt-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Prior to making a reservation through the Service, you are
              strongly advised to be vigilant of the following guidelines and
              comply with the same.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Select the correct train for your journey.</li>
                <li>Fix a convenient date for both up & down journeys.</li>
                <li>
                  Ensure that you have a thorough understanding of the rates
                  applicable.
                </li>
                <li>Maximum of 5 seats could be reserved at once.</li>
                <li>
                  Standard customer verification and other terms and conditions
                  would apply.
                </li>
                <li>
                  NIC numbers of each and every passenger except "DEPENDENT"
                  should be furnished.
                </li>
                <li>
                  A reference number along with ticket details will be sent via
                  email to commuters who make the reservation via website and/or
                  mobile app.
                </li>
                <li>
                  Commuters are requested to present the booking reference
                  number for ticket printing purposes and notify any enquiries
                  related to their reservation to the railway officer at the
                  counters. Tickets can be printed at any existing ticket
                  printing location of Sri Lanka Railways (Please click Ticket
                  printing locations tab) and it is recommended to get printed
                  the ticket in advance.
                </li>
                <li>
                  Passengers must provide the booking reference number along
                  with their NIC or passport in person at the Station Counter
                  and ticket will not be issued to any third party.
                </li>
                <li>
                  A reservation only becomes guaranteed once full payment has
                  been received by Sri Lanka Railways.
                </li>
                <li>
                  No fresh tickets will be issued in lieu of misplaced or lost
                  tickets.
                </li>
                <li>
                  The reserved tickets could be used only for specified trains.
                </li>
                <li>
                  Travelling on any other trains by using these types of tickets
                  are strictly prohibited. An ordinary travelling ticket should
                  be purchased for travelling to a transits station to catch a
                  reserved train.
                </li>
                <li>
                  All tickets issued through the Service are the property of Sri
                  Lanka Railways. Tickets are non-transferable and should be
                  handed over to the destination station before leaving the
                  station after the journey. Sri Lanka Railways officers have
                  the authority to request and check the tickets at any given
                  moment
                </li>
              </ul>

              <h4>PAYMENT METHODS</h4>
              <p>
                You should use a valid VISA or Master Credit/ Debit card when
                making online reservations through the internet.
              </p>

              <h4>Debit/Credit Card, Bank Account Details:</h4>
              <p>
                You agree that the debit/credit card details provided by you for
                use of the Sri Lanka Railways online seat reservation service is
                correct and accurate and you shall not use a Debit/ credit card,
                that is not lawfully owned by you or the use of which is not
                authorized by the lawful owner thereof. You further agree and
                undertake to provide correct and valid debit/credit card
                details.
              </p>
              <p>
                You agree, understand and confirm that your personal data
                including without limitation details relating to debit card/
                credit card transmitted over the Internet may be susceptible to
                misuse, hacking, theft and/ or fraud and the Sri Lanka Railways
                or your Payment Service Provider(s) have no control over such
                matters.
              </p>
              <p>
                The Sri Lanka Railways (including its service providers and
                suppliers), the Payment Service Provider(s) and its affiliates
                and associates shall not be liable, at any time, for any failure
                of performance, error, omission, interruption, deletion, defect,
                delay in operation or transmission, computer virus,
                communications line failure, theft or destruction or
                unauthorized access to, alteration of, or use of information
                contained on the Website.
              </p>
              <p>
                You warrant, agree and confirm the following when you initiate a
                payment transaction through the Service and/or issue an online
                payment instruction and/or provide your card / bank details:
              </p>
              <ul>
                <li>
                  You are fully and lawfully entitled to use such credit / debit
                  card, bank account for such transactions.
                </li>
                <li>
                  You are responsible to ensure that the card/ bank account
                  details provided by you are accurate.
                </li>
                <li>
                  You authorize debit of the nominated card/ bank account for
                  the payment of fees selected by you.
                </li>
                <li>
                  You are responsible to ensure that sufficient credit is
                  available on the nominated card/ bank account at the time of
                  making the payment to permit the payment of the dues payable
                  or fees selected by you.
                </li>
              </ul>

              <p>
                You are responsible for all transactions performed utilizing
                your credit/debit card and/or bank account.
              </p>
              <p>
                Server Slow Down/Session Timeout: In case the Website or Payment
                Service Provider’s webpage, that is linked to the Website, is
                experiencing any server related issues like 'slow down' or
                'failure' or 'session timeout', you shall, before initiating the
                second payment, check whether your bank account has been debited
                or not and accordingly resort to one of the following options:
              </p>

              <ul>
                <li>
                  In case the bank account appears to be debited, ensure that
                  you do not make the payment twice and immediately thereafter
                  contact the Sri Lanka Railways via e-mail or any other mode of
                  contact as provided by the Sri Lanka Railways to confirm
                  payment.
                </li>
                <li>
                  In case the Bank Account is not debited, you may initiate a
                  fresh transaction to make payment.
                </li>
                <li>
                  However, you agree that under no circumstances the Payment
                  Gateway Service Provider shall be held responsible for such
                  fraudulent/duplicate transactions and hence no claims should
                  be raised to Payment Gateway Service Provider. No
                  communication received by the Payment Service Provider(s) in
                  this regards shall be entertained by the Payment Service
                  Provider(s).
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Cancellation policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  If you wish to cancel the journey, you have to visit the
                  nearest Railway station where the mTicketing service is
                  available together with reservation tickets issued to you and
                  it is a mandatory requirement to provide your NIC/passport to
                  the counter for verification purpose.
                </li>
                <li>Fill the appropriate application supplied carefully.</li>
                <li>
                  Refund percentage will be calculated according to the below
                  table exclusive of service charge.
                </li>
                <li>
                  Cancellation can be done according to the below mentioned time
                  periods prior to relevant train departure.
                </li>
              </ul>

              <h5 className="text-center">
                Number hours to the train departure time
              </h5>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">
                        More than 168 hours (7 days +)
                      </TableCell>
                      <TableCell align="center">
                        Less than 168 hours but more than 48 hours ( 2 days > 7
                        days)
                      </TableCell>
                      <TableCell align="center">
                        Less than 48 hours ( less than 2 days)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        Refund percentage (%) from the ticket fee
                      </TableCell>
                      <TableCell align="center">75%</TableCell>
                      <TableCell align="center">50%</TableCell>
                      <TableCell align="center">0%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Refund policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Refunds will be available only for the particular train
                  (journey) which has been completely unavailable due to an
                  interruption.
                </li>
                <li>
                  Only the ticket fee will be refunded and service charge will
                  not be refunded.
                </li>
                <li>
                  Refunds can be claimed only on mTicketing service available
                  stations.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Liability clause</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                SLR shall not be held liable for any damages; loss or theft of
                personal luggage and belongings, nor can SLR be held liable for
                personal injury, accident, illness or death while guests are on
                an excursion made available by the train.
              </p>
              <p>
                SLR shall also not be held responsible, when circumstances
                beyond its control lead to an interruption, early termination,
                delay or cancellation of any particular trip. Such circumstances
                shall include, but not be limited to instances of vis
                major/force majeure and/or casus fortuitus (natural causes such
                as floods and other natural disasters, fortuitous and unforeseen
                events, etc.).
              </p>
              <p>
                Notwithstanding anything to the contrary, Sri Lanka Railways and
                its mTicketing Service Provider] shall not be liable to you
                and/or to any third party for any direct, indirect,
                consequential, special, incidental and/or punitive damages, lost
                profit, lost revenue, mental distress, inconvenience, hardship,
                loss/corruption or destruction of data and/or the like. Sri
                Lanka Railways and its mTicketing Service Provider are not
                liable for any claims, loss and/or damage suffered by any person
                due to fraudulent use of that person’s debit/credit card and/or
                for refunding any payments made through such debit/credit card.
                Sri Lanka Railways’ and its mTicketing Service Provider’s
                liability is excluded and limited to the maximum extent
                permitted by law.
              </p>
              <p>
                You shall indemnify and hold harmless Sri Lanka Railways, its
                mTicketing Service Provider and their respective employees and
                directors from and against any and all claims, losses, damages,
                liabilities, demands, suits, proceedings, costs and expenses,
                arising out of and/or in any way connected with your use of the
                Services and/or arising from your breach of any representation,
                warranty, terms and/or conditions specified herein.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>CHILD POLICY</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Children from the age of 3 (three) years and younger sharing a
              seat with their parents travel free of charge (maximum of 1
              (one)child per adult). Due to space constraints, SLR will not be
              able to accommodate any additional seat(s) to accommodate the
              infant / children. Children will have to share the seat with their
              parents / guardians. Should this pose a problem, SLR recommends
              that the guests book an additional seat for the children (in which
              case the children's rate does not apply and the standard adult
              rate for the seat shall apply). Children from the age of 3 (three)
              years and older pay full adult rates. SLR does not serve or
              provide special meals for children and/ or infants or adults.
              Children should be kept under strict adult supervision by their
              parents/ guardians and should not inconvenience other guests.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>DANGEROUS GOODS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For safety reasons, no guest is allowed to bring dangerous goods
              such as firearms, flammable substances, and fireworks, poisonous
              or toxic substances on board.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>PETS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>No pets are allowed onboard.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>LUGGAGE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Each adult passenger will be allowed, to bring on board their
                luggage, free of charge as per SLR’s general regulation. (Refer
                to general commercial rules set out below. For any enquiries
                meet a railway office.) The commuters will have to store luggage
                in the Luggage cabin by themselves. Luggage/baggage stored in
                the Luggage cabin is subject to availability. SLR would not
                provide additional space to accommodate their luggage.{" "}
                <s>
                  Heavy luggage is exclusively prohibited as little space
                  available for commuters to store their luggage.
                </s>
              </p>
              <p>
                As per general commercial rules of SLR, followings are the
                limitations applicable on free luggage based on the type of
                ticket.
              </p>
              <ul>
                <li>First Class tickets holder : 40 Kg.</li>
                <li>Second Class tickets holder : 35 Kg.</li>
                <li>Third Class tickets holder : 25 Kg.</li>
              </ul>
              <p>
                Passengers are strictly recommended to ensure that their luggage
                is(are) securely locked. SLR is not responsible for any stolen
                or lost luggage.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>General</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                You agree that Sri Lanka Railways at its sole discretion may
                revise the Terms and Conditions herein at any time without
                assigning any reasons therefore and you agree to be bound by all
                such revisions made by Sri Lanka Railways from time to time. It
                is your responsibility to periodically review the latest version
                of the Terms and Conditions uploaded at
                http://www.railway.gov.lk/ to stay informed of updates.
              </p>
              <p>
                The SLR retains the right to suspend or terminate this Service
                at any time without any notice to you.
              </p>
              <p>
                Passengers must provide the booking reference number along with
                their NIC or passport to the counter and Tickets will not be
                issued to 3rd party for any reason.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>GOVERNING LAWS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                These terms and conditions and the Service shall be subject to
                and construed in accordance with the laws of the Democratic
                Socialist Republic of Sri Lanka and all disputes pertaining
                thereto shall be subject to the exclusive jurisdiction of the
                Courts of Sri Lanka.
              </p>
              <p>
                Any enquiries or complaints should be forwarded in writing to
                the Deputy General Manager (commercial) - Sri Lanka Railways
                Headquarters, Colombo-10.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default TAndC;
