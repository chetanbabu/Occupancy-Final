import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
import './SCSS.css';
import Logout from './logout.jsx';
import Clock from 'react-live-clock';
class requestroombooking extends Component {
	constructor(props) {
		super();
	}
	roomfeat = (event) => {
		window.history.pushState(null, 'roomfeat', '/roomfeat');
		window.location.reload();
	};

	render() {
		return (
			<div class="stars">
				<MDBAnimation type="bounce" infinite>
					<h1
						style={{
							marginLeft: '35%',
							color: '#001399',
							backgroundcolor: '#333',
							letterspacing: '.1em',
							textshadow:
								'0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9)'
						}}
					>
						<span class="badge badge-pill badge-secondary">
							{' '}
							Hey,{sessionStorage.getItem('fname')} book a room here!!!
						</span>
					</h1>
				</MDBAnimation>
				<h2 class="badge badge-success" style={{ marginLeft: '90%', marginTop: '1%', display: 'inline' }}>
					Time :<Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
					{'   '}
				</h2>
				<br />
				<Router>
					<ul class="breadcrumb navbar navbar-inverse bg-dark navbar-dark">
						<li style={{ marginLeft: '48%' }}>
							<NavLink to="/roomfeat" name="roomfeat" onClick={this.roomfeat}>
								See Room Features
							</NavLink>
						</li>
					</ul>
				</Router>
				<br />
				<form
					method="POST"
					action="http://localhost:8000/reqroombooking"
					style={{ marginLeft: '30%', marginRight: '40%' }}
				>
					<input
						type="text"
						style={{ visibility: 'hidden' }}
						name="fid"
						value={sessionStorage.getItem('fid')}
					/>
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Room No</span>
						</div>
						<input type="text" name="roomno" class="form-control " />
					</div>

					<br />
					<br />
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text">Day</span>
						</div>
						<br />
						<select name="day" class="form-control " data-style="btn-inverse" id="day1">
							<option value="MONDAY">Monday</option>
							<option value="TUESDAY">Tuesday</option>
							<option value="WEDNESDAY">Wednesday</option>
							<option value="THURSDAY">Thursday</option>
							<option value="FRIDAY">Friday</option>
						</select>
					</div>
					<br />
					<br />
					<div id="yess" class="input-group">
						<div class="input-group-prepend">
							<span id="fort" class="input-group-text">
								Time of Class
							</span>
						</div>
						<div class="hulu">
							<select name="time" class="form-control" id="timeyy">
								<option value="period1">08:45-9:30</option>
								<option value="period2">09:30-10:20</option>
								<option value="period3">10:20-11:10</option>
								<option value="period4">11:20-12:10</option>
								<option value="period5">12:10-01:00</option>
								<option value="period6">01:00-02:00</option>
								<option value="period7">02:00-02:50</option>
								<option value="period8">02:50-03:40</option>
								<option value="period9">03:40-04:10</option>
							</select>
						</div>
					</div>
					<br />
					<br />

					<br />
					<br />
					<button type="submit" data-testid="submitbutton" class="btn btn-dark" style={{ marginLeft: '40%' }}>
						Submit
					</button>
				</form>

				<Logout />
			</div>
		);
	}
}

export default requestroombooking;
