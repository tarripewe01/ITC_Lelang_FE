import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Category = ({ value, onChange }) => {
  const options = [
    { label: "Mobil", value: "Mobil" },
    { label: "Motor", value: "Motor" },
  ];

  return (
    <>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          label="Category"
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export const Rating = ({ value, onChange, label }) => {
  const options = [
    { label: "-", value: "-" },
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" },
  ];

  return (
    <>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          label={label}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export const Branch = ({ value, onChange, label }) => {
  const options = [
    { label: "Jakarta", value: "Jakarta" },
    { label: "Bandung", value: "Bandung" },
    { label: "Medan", value: "Medan" },
    { label: "Pekanbaru", value: "Pekanbaru" },
    { label: "Pangkal Pinang", value: "Pangkal Pinang" },
    { label: "Kalimantan", value: "Kalimantan" },
  ];

  return (
    <>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          label={label}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export const Document = ({ value, onChange, label }) => {
  const options = [
    { label: "Ada", value: "Ada" },
    { label: "Tidak Ada", value: "Tidak Ada" },
  ];

  return (
    <>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          label={label}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export const BPKB = ({ value, onChange, label }) => {
  const options = [
    { label: "Ready", value: "Ready" },
    { label: "7 Hari Kerja", value: "7 Hari Kerja" },
    { label: "14 Hari Kerja", value: "14 Hari Kerja" },
    { label: "30 Hari Kerja", value: "30 Hari Kerja" },
  ];

  return (
    <>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          label={label}
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export const Status = ({ value, onChange, label }) => {
    const options = [
      { label: "Aktif", value: 0 },
      { label: "Tidak Aktif", value: 1 },
    ];
  
    return (
      <>
        <FormControl sx={{ m: 1, width: "98%" }}>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            displayEmpty
            label={label}
            inputProps={{ "aria-label": "Without label" }}
          >
            {options.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  };
