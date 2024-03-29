import React, {useEffect} from 'react';
import iconCoupe from '../../images/icon_coupe.png';
import iconEconomclass from '../../images/icon_economclass.png';
import iconSedentary from '../../images/icon_sedentary.png';
import iconLuxury from '../../images/icon_luxury.png';
import iconWifi from '../../images/icon_wifi.png';
import iconExpress from '../../images/icon_express.png';
import iconThere from '../../images/icon_there.png';
import iconBack from '../../images/icon_back.png';
import iconPlus from '../../images/icon_plus.png';
import iconMinus from '../../images/icon_minus.png';
import LastRoutes from './LastRoutes';
import ReactCompoundSlider from './reactCompoundSlider/ReactCompoundSlider';
import ReactCompoundSliderSmall from './reactCompoundSlider/ReactCompoundSliderSmall';

import { connect } from 'react-redux';
import { setDataFormAC } from '../../redux/action';
import { getLastRoutesTC } from '../../redux/searchMain-reducer';
import { withRouter } from 'react-router';
import { filterTicketsAndSeatsReducerTC } from '../../redux/filterTicketsAndSeats-reducer';


function SideBarSearchTicketsAndSeatSelection(props) {

	// componentDidMount() {
	// 	this.props.setSeatsAndTickets('actualPage', this.props.match.url);
	// 	this.props.getLasRoutes();
	// };
	useEffect(() => {
		props.setSeatsAndTickets('actualPage', props.match.url);
		props.getLasRoutes();
	}, []);

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.total_count !== this.props.total_count ||
	// 		prevProps.have_second_class !== this.props.have_second_class ||
	// 		prevProps.have_third_class !== this.props.have_third_class ||
	// 		prevProps.have_fourth_class !== this.props.have_fourth_class ||
	// 		prevProps.have_first_class !== this.props.have_first_class ||
	// 		prevProps.have_wifi !== this.props.have_wifi ||
	// 		prevProps.have_express !== this.props.have_express ||
	// 		prevProps.price_arr !== this.props.price_arr ||
	// 		prevProps.start_departure_hour_arr !== this.props.start_departure_hour_arr ||
	// 		prevProps.start_arrival_hour_arr !== this.props.start_arrival_hour_arr ||
	// 		prevProps.end_departure_hour_arr !== this.props.end_departure_hour_arr ||
	// 		prevProps.end_arrival_hour_arr !== this.props.end_arrival_hour_arr ||
	// 		prevProps.customRangeCostFrom !== this.props.customRangeCostFrom ||
	// 		prevProps.customRangeCostTo !== this.props.customRangeCostTo
	// 	) {
	// 		this.props.setSeatsAndTickets('actualPage', this.props.match.url);
	// 	};
	// };
	useEffect(() => {
		props.setSeatsAndTickets('actualPage', props.match.url);	
	}, [props.total_count, props.have_second_class, props.have_third_class,
	    props.have_fourth_class, props.have_first_class, props.have_wifi,
	    props.have_express, props.price_arr, props.start_departure_hour_arr,
	    props.start_arrival_hour_arr, props.end_departure_hour_arr,
	    props.end_arrival_hour_arr, props.customRangeCostFrom, props.customRangeCostTo]);	

	const handleWhereFromDate = (event) => setWhereFromDate(event.currentTarget.value);

	const handleWhereToDate = (event) => setWhereToDate(event.currentTarget.value);

	const checkSecondClass = (event) => props.setSeatsAndTickets('have_second_class', event.currentTarget.checked);

	const checkThirdClass = (event) => props.setSeatsAndTickets('have_third_class', event.currentTarget.checked);

	const checkFourthClass = (event) => props.setSeatsAndTickets('have_fourth_class', event.currentTarget.checked);

	const checkFirstClass = (event) => props.setSeatsAndTickets('have_first_class', event.currentTarget.checked);

	const checkWiFi = (event) => props.setSeatsAndTickets('have_wifi', event.currentTarget.checked);

	const checkExpress = (event) => props.setSeatsAndTickets('have_express', event.currentTarget.checked);

	const setCustomRangeCostFrom = (bool) => props.setSeatsAndTickets('customRangeCostFrom', bool);

	const setCustomRangeCostTo = (bool) => props.setSeatsAndTickets('customRangeCostTo', bool);

	const setPrice = (array) => props.setSeatsAndTickets('price_arr', array);

	const startDeparture = (array) => props.setSeatsAndTickets('start_departure_hour_arr', array)

	const startArrival = (array) => props.setSeatsAndTickets('start_arrival_hour_arr', array);

	const endDeparture = (array) => props.setSeatsAndTickets('end_departure_hour_arr', array);

	const endArrival = (array) => props.setSeatsAndTickets('end_arrival_hour_arr', array);

	const lastRoutesJSX = props.lastRoutes ? props.lastRoutes.map((el, idx) =>
		<LastRoutes key={idx} state={el} />) : [];

	return (
		<div className="tickets-search-param col-lg-3 mt-5 mb-5 mr-4">
			<div className="tickets-search-menu bg-dark">
				<form className="form pt-5 pl-4 pr-4 w-100" action="input">
					<p>Дата поездки</p>
					<div className="d-flex form-group">
						<input className="col-sm form-control"
							type="date"
							onChange={handleWhereFromDate}
							value={props.form.whereFromDate}
						/>
					</div>
				</form>
				<form className="form pt-3 pl-4 pr-4 w-100" action="input">
					<p>Дата возвращения</p>
					<div className="d-flex form-group">
						<input className="col-sm form-control"
							type="date"
							onChange={handleWhereToDate}
							value={props.form.whereToDate}
						/>
					</div>
				</form>
				<hr className="bg-light" />
				<div className="row pl-4 pr-4">
					<div className="container coupe d-flex">
						<img className="icon-coupe" src={iconCoupe} alt="иконка купе" />
						<p className="container">Купе</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch1"
								checked={props.have_second_class} onChange={checkSecondClass} />
							<label className="custom-control-label" htmlFor="customSwitch1"></label>
						</div>
					</div>
					<div className="container economclass d-flex">
						<img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт" />
						<p className="container">Плацкарт</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch2"
								checked={props.have_third_class} onChange={checkThirdClass} />
							<label className="custom-control-label" htmlFor="customSwitch2"></label>
						</div>
					</div>
					<div className="container coupe d-flex">
						<img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий" />
						<p className="container">Сидячий</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch3"
								checked={props.have_fourth_class} onChange={checkFourthClass} />
							<label className="custom-control-label" htmlFor="customSwitch3"></label>
						</div>
					</div>
					<div className="container coupe d-flex">
						<img className="icon-coupe" src={iconLuxury} alt="иконка Люкс" />
						<p className="container">Люкс</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch4"
								checked={props.have_first_class} onChange={checkFirstClass} />
							<label className="custom-control-label" htmlFor="customSwitch4"></label>
						</div>
					</div>
					<div className="container coupe d-flex">
						<img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi" />
						<p className="container">Wi-Fi</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch5"
								checked={props.have_wifi} onChange={checkWiFi} />
							<label className="custom-control-label" htmlFor="customSwitch5"></label>
						</div>
					</div>
					<div className="container coupe d-flex">
						<img className="icon-coupe" src={iconExpress} alt="иконка Экспресс" />
						<p className="container">Экспресс</p>
						<div className="custom-control custom-switch d-flex">
							<input type="checkbox" className="custom-control-input" id="customSwitch6"
								checked={props.have_express} onChange={checkExpress} />
							<label className="custom-control-label" htmlFor="customSwitch6"></label>
						</div>
					</div>
				</div>


				<hr className="bg-light" />
				<form className="form pt-3 pl-4 pr-4 w-100">
					<label className="custom-range-cost" htmlFor="customRange3">Стоимость</label>
					<div className="row justify-content-between react-compound-slider"><span>от</span><span>до</span></div>
					<ReactCompoundSlider setPrice={setPrice} />
				</form>



				<hr className="bg-light mt-5" />
				{props.customRangeCostFrom ?
					<div>
						<div className="container d-flex justify-content-between w-100">
							<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
								<img className="mr-2" src={iconThere} alt="иконка туда" />Туда</p>
							<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
								onClick={() => setCustomRangeCostFrom(false)}
								src={iconMinus} alt="иконка плюс" />
						</div>
						<form className="form pl-4 pr-4 mt-2 pb-2 w-100">
							<label htmlFor="customRange3">Время отбытия</label>
							<ReactCompoundSliderSmall setHoursFilter={startDeparture} />
						</form>
						<form className="form pl-4 pr-4 pt-3 pb-5 w-100">
							<div className="d-flex mt-4 justify-content-end">
								<label htmlFor="customRange3">Время прибытия</label>
							</div>
							<ReactCompoundSliderSmall setHoursFilter={startArrival} />
						</form>
					</div> :
					<div className="container d-flex justify-content-between w-100">
						<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
							<img className="mr-2"
								src={iconThere}
								alt="иконка туда" />Туда</p>
						<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
							onClick={() => setCustomRangeCostFrom(true)}
							src={iconPlus} alt="иконка плюс" />
					</div>}

				<hr className="bg-light" />

				{props.customRangeCostTo ?
					<div className="pb-3">
						<div className="container d-flex justify-content-between w-100">
							<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
								<img className="mr-2" src={iconBack} alt="иконка туда" />Обратно</p>
							<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
								onClick={() => setCustomRangeCostTo(false)}
								src={iconMinus} alt="иконка плюс" />
						</div>
						<form className="form pl-4 pr-4 mt-2 pb-2 w-100">
							<label htmlFor="customRange3">Время отбытия</label>
							<ReactCompoundSliderSmall setHoursFilter={endDeparture} />
						</form>
						<form className="form pl-4 pr-4 pt-3 pb-5 w-100">
							<div className="d-flex mt-4 justify-content-end">
								<label htmlFor="customRange3">Время прибытия</label>
							</div>
							<ReactCompoundSliderSmall setHoursFilter={endArrival} />
						</form>
					</div> :
					<div className="container d-flex justify-content-between w-100">
						<p className="custom-range-cost ml-2 mt-2 pb-3 font-weight-bold">
							<img className="mr-2"
								src={iconBack}
								alt="иконка обратно" />Обратно</p>
						<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
							onClick={() => setCustomRangeCostTo(true)}
							src={iconPlus} alt="иконка плюс" />
					</div>
				}
			</div>


			<div className="last-tickets">
				<h4 className="mt-5 mb-2 ml-1">Последние билеты</h4>
				{lastRoutesJSX}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		lastRoutes: state.sectionSearch.lastRoutes,
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		items: state.filterChoiceTicketsAndSeatsPages.tickets,
		total_count: state.filterChoiceTicketsAndSeatsPages.totalCountTickets,
		have_second_class: state.filterChoiceTicketsAndSeatsPages.have_second_class,
		have_third_class: state.filterChoiceTicketsAndSeatsPages.have_third_class,
		have_fourth_class: state.filterChoiceTicketsAndSeatsPages.have_fourth_class,
		have_first_class: state.filterChoiceTicketsAndSeatsPages.have_first_class,
		have_wifi: state.filterChoiceTicketsAndSeatsPages.have_wifi,
		have_express: state.filterChoiceTicketsAndSeatsPages.have_express,
		price_arr: state.filterChoiceTicketsAndSeatsPages.price_arr,
		start_departure_hour_arr: state.filterChoiceTicketsAndSeatsPages.start_departure_hour_arr,
		start_arrival_hour_arr: state.filterChoiceTicketsAndSeatsPages.start_arrival_hour_arr,
		end_departure_hour_arr: state.filterChoiceTicketsAndSeatsPages.end_departure_hour_arr,
		end_arrival_hour_arr: state.filterChoiceTicketsAndSeatsPages.end_arrival_hour_arr,
		customRangeCostFrom: state.filterChoiceTicketsAndSeatsPages.customRangeCostFrom,
		customRangeCostTo: state.filterChoiceTicketsAndSeatsPages.customRangeCostTo
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setDataForm: (form) => {
			const action = setDataFormAC(form);
			dispatch(action);
		},
		getLasRoutes: () => {
			dispatch(getLastRoutesTC())
		},
		setSeatsAndTickets: (fieldName, fieldValue) => dispatch(filterTicketsAndSeatsReducerTC(fieldName, fieldValue))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarSearchTicketsAndSeatSelection));
