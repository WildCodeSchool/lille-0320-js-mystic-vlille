import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import useStyles from "./UseStyles";

export default function ScrollDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <HelpOutlineIcon
        type="button"
        onClick={handleClickOpen("paper")}
        className={classes.modalButton}
        title="Aide"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className={classes.paper}>
            <h2 className={classes.modalTitle}>Comment lire les jauges ?</h2>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className={classes.paper}>
              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/full.png"
                  alt="jauge pleine"
                />
                <h3 className={classes.modalTitle}>La jauge est pleine</h3>
              </div>
              <p className={classes.modalText}>
                Il n'y a plus de place mais la totalité du parc de vélos est
                disponible
              </p>
              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/trois.png"
                  alt="jauge trois quart"
                />
                <h3 className={classes.modalTitle}>
                  La jauge est au trois-quart plein
                </h3>
              </div>
              <p className={classes.modalText}>
                Il reste plus de vélos que de places
              </p>

              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/half.png"
                  alt="jauge à moitié"
                />
                <h3 className={classes.modalTitle}>
                  La jauge est à moitié pleine
                </h3>
              </div>
              <p className={classes.modalText}>
                Il reste autant de vélos que de places
              </p>
              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/quater.png"
                  alt="jauge un quart"
                />
                <h3 className={classes.modalTitle}>
                  La jauge est au quart plein
                </h3>
              </div>
              <p className={classes.modalText}>
                Il ne reste pas beaucoup de vélos sur cette station
              </p>
              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/empty.png"
                  alt="jauge vide"
                />
                <h3 className={classes.modalTitle}>La jauge est vide</h3>
              </div>
              <p className={classes.modalText}>
                Il n'a plus de vélo mais la totalité des places est disponible
              </p>
              <div className={classes.modalLegend}>
                <img
                  className={classes.modalImg}
                  src="/grey.png"
                  alt="jauge vide"
                />
                <h3 className={classes.modalTitle}>La jauge est grise</h3>
              </div>
              <p className={classes.modalText}>La station est hors service</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            J'ai compris
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
