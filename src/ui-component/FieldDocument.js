import { Grid } from "@mui/material";
import Field from "./Field";
import { BPKB, Document, Status } from "./SelectCustom";

const FieldDocument = ({ label, type, option, choose }) => {
  return (
    <div style={{ marginLeft: 20 }}>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <p style={{ fontWeight: "500" }}>{label}</p>
        </Grid>
        <Grid xs={1}>
          <p style={{ fontWeight: "500" }}> :</p>
        </Grid>
        {choose === "text" ? (
          <Grid xs={8}>
            <Field type={type} />
          </Grid>
        ) : (
          <Grid xs={8}>
            {option === "Document" ? (
              <Document />
            ) : option === "Status" ? (
              <Status />
            ) : option === "BPKB" ? (
              <BPKB />
            ) : (
              <Field type={type} />
            )}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default FieldDocument;


