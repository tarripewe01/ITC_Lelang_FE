import React from "react";
import { Grid } from "@mui/material";
import Field from "./Field";
import { Document, Status, BPKB } from "./SelectCustom";

const FieldDocument = ({ label, type, option }) => {
  return (
    <div style={{ marginLeft: 20 }}>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <p style={{ fontWeight: "500" }}>{label}</p>
        </Grid>
        <Grid xs={1}>
          <p style={{ fontWeight: "500" }}> :</p>
        </Grid>
        <Grid xs={8}>
          {option === "select" ? (
            <Document />
          ) : <Field type={type} /> || option === "BPKB" ? (
            <BPKB />
          ) : <Field type={type} /> || option === "status" ? (
            <Status />
          ) : (
            <Field type={type} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default FieldDocument;
