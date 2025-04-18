import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Flightcontext } from '../Store/FlightContext'
import { FaPlaneDeparture,FaPlaneArrival, FaWeight } from "react-icons/fa";
import { MdAirlines, MdAirlineStops, MdChecklistRtl, MdEventSeat, MdOutlineDateRange, MdOutlineWatchLater } from "react-icons/md";
import { FaPlane } from "react-icons/fa6";


const FlightInfo = () => {
    const { moreInfo } = useContext(Flightcontext)
    console.log(moreInfo);
    return (
        <>
            <div className="infoContainer">
                <div className="container">
                    <div className="FlightsInfo">
                        <h2 className='text-center my-5 text-primary'>All Details Of Your Flighs</h2>
                        <div className="normalInfo">
                            <div className="departureInfo">
                                <h3><FaPlaneDeparture  cl="true" className="me-2" />Departure From :{moreInfo.itineraries[0].segments[0].departure.iataCode}</h3>
                                <h4 className='text-center'> At: {new Date(moreInfo.itineraries[0].segments[0].departure.at).toLocaleDateString()}</h4>
                                <h5 className='text-center '> <MdOutlineWatchLater className="me-1 mb-1" />: {new Date(moreInfo.itineraries[0].segments[0].departure.at).toLocaleTimeString()}</h5>
                            </div>
                            <div className="priceInfo">
                                <h5>price :&#8377;{Math.round(moreInfo.price.total * 90)}</h5>
                                <h6>Duration :{moreInfo.formattedDuration}</h6>
                            </div>
                            <div className="arrivalInfo">

                                <h3><FaPlaneArrival  className="me-2"/>Arrival At:{moreInfo.itineraries[0].segments[0].arrival.iataCode}</h3>
                                <h4 className='text-end'> At: {new Date(moreInfo.itineraries[0].segments[0].arrival.at).toLocaleDateString()}</h4>
                                <h5 className='text-end'> <MdOutlineWatchLater className="me-1 mb-1" />: {new Date(moreInfo.itineraries[0].segments[0].arrival.at).toLocaleTimeString()}</h5>
                            </div>
                        </div>
                        <h4 className='text-center my-3'>Advance Detailes:</h4>
                        <div className="AdvanceInfo">
                            <div>
                                <h6 className='mt-3'><FaPlane className='me-1' />AirCraft Code :  <b>{moreInfo.itineraries[0].segments[0].aircraft.code}</b></h6>
                                <h6 className='mt-3'><MdAirlineStops className='me-1' /> NumberOf Stops  :  <b>{moreInfo.itineraries[0].segments[0].numberOfStops}</b></h6>
                                <h6 className='mt-3'><MdOutlineDateRange className='me-1' /> LastTicketingDate :  <b>{moreInfo.lastTicketingDate}</b></h6>
                                <h6 className='mt-3'><FaWeight className='me-1' /> Weight :  <b>{moreInfo.travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.weight}KG</b></h6>
                            </div>
                            <div>
                                <h6 className='mt-3'><MdEventSeat className='me-1' /> BookableSeats :  <b>{moreInfo.numberOfBookableSeats}</b></h6>
                                <h6 className='mt-3'><MdChecklistRtl className="em-1" /> Included CheckedBags Only :  <b>{moreInfo.pricingOptions.includedCheckedBagsOnly}true</b></h6>
                                <h6 className='mt-3'><MdAirlines className='me-1' /> Airline Code :  <b>{moreInfo.validatingAirlineCodes}(AirIndia)</b></h6>
                            </div>

                        </div>
                        <div className='flight_Btn text-end'>
                        <button>
                            <Link className='text-decoration-none text-white' to={"/BookTickets"}>Book Tickets</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightInfo