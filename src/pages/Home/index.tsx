import React, { useState } from 'react'
import Map from 'components/Map'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Vote from 'components/Vote'
import { logPageView, logEvent } from 'components/analytics'
import getPlaces from 'components/Map/getPlaces'
import './styles.css'
import _sortBy from 'lodash/sortBy'
import Fab from '@material-ui/core/Fab';
import { FaWhatsapp } from 'react-icons/fa';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import db from 'components/FirebaseConfig'
import _replace from 'lodash/replace'
const { validate } = require('rut.js')

const useStyles = makeStyles(theme => ({
	texto: {
		maxWidth: 594,
	},
	textoprimary: {
		color: '#28a745'

	},
	textosecondary: {
		color: '#dc3545'
	},
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		background: "#25d366",
		border: "1px solid  #128c7e"
	},
	card: {
		minWidth: 275, background: "#dcf8c6",
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	paper: {
		background: "#dcf8c6",
	},
	paperPadron: {
		background: "#ccc"
	},
	cardPadron: {
		minWidth: 275,
		background: "#f2d9d9"
	},
	cardHeaderPadron: {
		fontSize: "1.2rem"
	},
	cardContent: {
		background: "#fff",
	},
	margin: {
		margin: theme.spacing(1),
	},

}));
function rand() {
	return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const Home: React.FC = () => {
	const classes = useStyles();
	logPageView()
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState<PopperPlacementType>();
	const [openPadron, setOpenPadron] = React.useState(false);
	const [anchorElPadron, setAnchorElPadron] = React.useState<HTMLButtonElement | null>(null);
	const [placementPadron, setPlacementPadron] = React.useState<PopperPlacementType>();
	const [rut, setRut] = useState('')

	const [respuestaConsulta, setRespuestaConsulta] = React.useState("");
	const [respuestaError, setRespuestaError] = React.useState('');

	const handleClick = (newPlacement: PopperPlacementType) => (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		setAnchorEl(event.currentTarget);
		setOpen(prev => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleWindowVoluntario = () => {
		logEvent('voluntarios', 'incripcion')
		window.open('https://docs.google.com/forms/d/e/1FAIpQLSfxtp_NtB0_plHIS3DhF0oiC4ZzC2d5b2Vty5LiC1OL5_9fcA/viewform', '_blank');
	}
	const handleClickPadron = (newPlacement: PopperPlacementType) => (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		logEvent('/', 'Consulta Padrón')
		setAnchorElPadron(event.currentTarget);
		setOpenPadron(prev => placement !== newPlacement || !prev);
		setPlacementPadron(newPlacement);
		setRespuestaConsulta('')
		setRespuestaError('')
		setRut('')

	}
	const handleClosePadron = () => {
		setOpenPadron(false);
		setRespuestaConsulta('')
		setRespuestaError('')
		setRut('')
	};

	const SearchRut = () => {
		let rutemp = rut.replace('.', "");
		rutemp = _replace(rutemp, '.', '');
		rutemp = _replace(rutemp, '.', '');
		rutemp = _replace(rutemp, '.', '');
		rutemp = _replace(rutemp, '.', '');

		rutemp = rutemp.trim()
		rutemp = rutemp.toUpperCase();
		setRut(rutemp)
		if (validate(rutemp)) {
			// true
			let habilitado = false
			try {
				db.ref('/').orderByChild("rut").equalTo(rutemp).on("child_added", function (snapshot) {
					habilitado = true
					setRespuestaError('')
					setRespuestaConsulta("Estas habilitado para sufragar en Consulta Ciudadana Municipal Rancagua 2019. Recuerda que puedes sufragar en el local de votación más cercano a su domicilio o lugar de trabajo.")
				});

				if (!habilitado) {
					setRespuestaConsulta('')
					setRespuestaError("No se ha encontrado el rut:" + rutemp + " en el Padrón de servel del 2017.")
				}

			} catch (e) {
				setRespuestaConsulta('')
				setRespuestaError("No se ha encontrado el rut:" + rutemp + " en el Padrón de servel del 2017.")
			}
		} else {
			setRespuestaConsulta('')
			setRespuestaError("Debe ingresar un rut válido")
		}

	}

	return (
		<div>
			<Header />
			<div className='container mt-4 Centro'>
				<h2 className='title'>Consulta Ciudadana Municipal Rancagua 2019.</h2>
			</div>
			<div className='container mt-4 Centro'>
				El próximo 15 de diciembre se realizará la histórica Consulta Ciudadana Municipal Rancagua 2019,
				oportunidad en la que cada rancagüino votará por los temas que considera relevantes para la comuna y el
				país. Invitamos a todas las vecinas y vecinos mayores de 14 años, que tengan su cédula de identidad y
				que residan en Rancagua, a participar de este importante y único proceso cívico.
			</div>

			<div className='container mt-4 Centro'>

				<Vote />
				<hr />
				<p />
				<div>
					<h4 className='title'>INFORMACIÓN IMPORTANTE</h4>
					<div className='Centro'>
						Para esta consulta podrán votar las personas que tengan entre 14 y 18 años con domicilio en la
						comuna de Rancagua, previo registro en el lugar de votación. Para los mayores de edad será
						requisito contar con domicilio electoral en Rancagua proporcionado por el Servicio Electoral de
						Chile (SERVEL),según padrón electoral 2017. La Consulta Ciudadana en Rancagua se realizará en
							forma presencial con registro y voto digital.

							<Button
							variant="contained"
							color="secondary"
							className={classes.margin}
							endIcon={<GoSearch />}
							onClick={handleClickPadron('top')}
						>
							Consulta si estas en el padrón aqui
						  </Button>

						<div className='container mt-4 Centro'>
							<Popper
								className='container margintopbottom'
								open={openPadron} anchorEl={anchorElPadron} placement={placementPadron} transition
								disablePortal={false}
								modifiers={{
									flip: {
										enabled: true,
									},
									preventOverflow: {
										enabled: true,
										boundariesElement: 'window',
									},
									arrow: {
										enabled: true,
									},
								}}
							>

								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={350}>
										<Paper className={classes.paperPadron}>
											<Card className={classes.cardPadron}>
												<CardHeader
													title="Consultar Padrón"
													className={classes.cardHeaderPadron}
													action={
														<IconButton aria-label="Close" onClick={handleClosePadron}>
															<AiOutlineCloseCircle />
														</IconButton>

													}
													subheader="Ingrese su rut para consultar si se encuentra en el padrón electoral 2017"
												/>

												<CardContent className={classes.cardContent}>
													<Typography className={classes.title} color="textSecondary" gutterBottom>
														<label >Rut</label>
														<input type="text" className="form-control" id="rut" placeholder="11111111-1" value={rut} onChange={e => setRut(e.target.value)} />
													</Typography>
													<Typography className={classes.textoprimary}>
														{respuestaConsulta}
													</Typography>
													<Typography className={classes.textosecondary}>
														{respuestaError}
													</Typography>
													<Button
														variant="contained"
														color="secondary"
														className={classes.margin}
														onClick={SearchRut}
													>
														Buscar
											  </Button>
												</CardContent>

											</Card>
										</Paper>
									</Fade>
								)}
							</Popper></div>

					</div>
					<div className=' Centro'>
						El registro y voto digital estará a cargo de un proveedor de software que cumple con los
						estándares de seguridad que la AChM recomienda para estos efectos y permite que las personas que
						deseen participar solo deben dirigirse a cualquiera de los lugares de votación y garantiza que
						no exista duplicidad de voto. Para aquellos que requieran asistencia especial o pertenezcan a la
						tercera edad y así lo requieran se habilitará en cada lugar de votación una mesa con voto en
						papel (voto tradicional) previo registro electrónico en el mismo lugar.
					</div>
				</div>
				<hr />
				<p />
				<div className='Centro'>
					<h4 className='title'>Horarios y locales de votación</h4>
					<p className='Centro'>
						Las vecinas y vecinos de Rancagua podrán ejercer su derecho a voto el día 15 de diciembre, de 08:00 a 16:00 horas. Podrán sufragar en el local de votación más cercano a su domicilio o lugar de trabajo:
					</p>

				</div>
				<div className='TextoIz'>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th scope='col'>Sector</th>
								<th scope='col'>Lugar</th>
								<th scope='col'>Dirección</th>
							</tr>
						</thead>
						<tbody>
							{_sortBy(getPlaces, ['sector', 'name']).map((place: any, index: number) => (
								<tr key={index}>
									<td>{place.sector}</td>
									<td>{place.name}</td>
									<td>{place.direccion}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='Centro'>
					<Map />
				</div>
				<hr />
				<p />
				<div className='Centro'>
					<h4 className='title'>VOLUNTARIOS</h4>
					<div className='Centro'>
						Para llevar adelante esta Consulta Ciudadana se requiere de mucho apoyo de parte de la comunidad
						y parte fundamental de este apoyo es el trabajo de los voluntarios y voluntarias. Tú puedes ser
						parte importante de este proceso, guiando a todas y todos los rancagüinos para que puedan
						entregar de buena manera y sin dificultades su opinión. Si deseas ser parte de la primera gran
						consulta ciudadana de la historia de nuestra comuna y apoyar a nuestras vecinas y vecinos, te
						invitamos a inscribierte en el siguiente link:
					</div>
					<button
						className='btn btn-danger btn-lg'
						onClick={handleWindowVoluntario}
					>
						Inscripción de voluntarios
							</button>

				</div>
			</div>
			<Fab aria-label="Wsp" className={classes.fab} onClick={handleClick('left-end')}>
				<FaWhatsapp size={24} color='white' ></FaWhatsapp>
			</Fab>
			<div>
				<Popper
					open={open} anchorEl={anchorEl} placement={placement} transition
					disablePortal={false}
					modifiers={{
						flip: {
							enabled: true,
						},
						preventOverflow: {
							enabled: true,
							boundariesElement: 'window',
						},
						arrow: {
							enabled: true,
						},
					}}
				>

					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper className={classes.paper}>
								<Card className={classes.card}>
									<CardHeader
										title="Atención"
										action={
											<IconButton aria-label="Close" onClick={handleClose}>
												<AiOutlineCloseCircle />
											</IconButton>
										}
									/>

									<CardContent className={classes.cardContent}>
										<Typography className={classes.title} color="textSecondary" gutterBottom>
											Para mayor información escribenos al <p><a href="https://wa.me/56977595314" className='App-link'><FaWhatsapp size={24} ></FaWhatsapp> +569 77595314</a></p>
										</Typography>
									</CardContent>

								</Card>
							</Paper>
						</Fade>
					)}
				</Popper></div>
			<Footer />
		</div >
	)
}

export default Home
