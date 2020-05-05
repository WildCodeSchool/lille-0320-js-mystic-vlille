import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import useStyles from "./UseStyles";
import Button from "@material-ui/core/Button";

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HelpOutlineIcon
        type="button"
        onClick={handleOpen}
        className={classes.modalButton}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.modalTitle}>Comment lire les jauges ?</h2>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/full.png"
                alt="jauge pleine"
              />
              <h3>La jauge est pleine</h3>
            </div>
            <p className={classes.modalText}>
              Il n'y a plus de place mais la totalité du parc de vélos est
              disponible
            </p>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/empty.png"
                alt="jauge vide"
              />
              <h3>La jauge est vide</h3>
            </div>
            <p className={classes.modalText}>
              Il n'a plus de vélo mais la totalité des places est disponible
            </p>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/quater.png"
                alt="jauge un quart"
              />
              <h3>La jauge est au quart plein</h3>
            </div>
            <p className={classes.modalText}>
              Il ne reste pas beaucoup de vélos sur cette station
            </p>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/half.png"
                alt="jauge à moitié"
              />
              <h3>La jauge est à moitié pleine</h3>
            </div>
            <p className={classes.modalText}>
              Il reste autant de vélos que de places
            </p>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/trois.png"
                alt="jauge trois quart"
              />
              <h3>La jauge est au trois-quart plein</h3>
            </div>
            <p className={classes.modalText}>
              Il reste plus de vélos que de places
            </p>
            <div className={classes.modalLegend}>
              <img
                className={classes.modalImg}
                src="/grey.png"
                alt="jauge pleine"
              />
              <h3>La jauge est grise</h3>
            </div>
            <p className={classes.modalText}>La station est hors service</p>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleClose}
              actionPosition="right"
            >
              J'ai compris
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
