/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";

// material-ui
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AnimateButton from "ui-component/extended/AnimateButton";

// project imports
import { setAlert } from "store/action/alertAction";
import { login } from "store/action/authAction";

import { PropTypes } from "prop-types";
import { useState, forwardRef } from "react";
import { connect, useSelector } from "react-redux";

import Logo from "ui-component/Logo";
import AuthCardWrapper from "../AuthCardWrapper";
import AuthWrapper1 from "../AuthWrapper1";
import { toast } from "react-toastify";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = ({ login, isAuthenticated, loading }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // login(email, password);
    if (!email || !password) {
      setError(true);
      toast.error("Email & Password is Required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      login(email, password);
    }

    if (isAuthenticated && auth.user?.role == "Admin") {
      navigate("/ITC-Finance");
    } else {
      toast.error("Account does not have permission", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Logo />
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Welcome Back
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <form
                      noValidate
                      onSubmit={HandleSubmit}
                      // {...others}
                    >
                      <FormControl
                        fullWidth
                        // error={Boolean(auth.user.email && errors.email)}
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel htmlFor="outlined-adornment-email-login">
                          Email Address
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-email-login"
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          label="Email Address"
                          inputProps={{}}
                        />

                        {!email && error && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                          >
                            Email is required
                          </FormHelperText>
                        )}
                      </FormControl>

                      <FormControl
                        fullWidth
                        // error={Boolean(touched.password && errors.password)}
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel htmlFor="outlined-adornment-password-login">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password-login"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={password}
                          onChange={onChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          inputProps={{}}
                        />
                        {!password && error && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                          >
                            Password is required
                          </FormHelperText>
                        )}
                      </FormControl>

                      <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                          {loading && <CircularProgress color="secondary" />}
                          <Button
                            disableElevation
                            // disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                          >
                            Sign in
                          </Button>
                        </AnimateButton>
                      </Box>
                    </form>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
