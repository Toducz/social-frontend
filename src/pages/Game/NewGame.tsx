import { Box, Button, Step, StepContent, StepLabel } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Stepper from '@mui/material/Stepper';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormTextField from '../../components/FormTextField';
import { GameDto } from '../../dto/game.dto';
import useTitle from '../../hooks/useTitle';

export default function NewGame() {
  useTitle('Add new game');

  const form = useForm<GameDto>();
  const { control, handleSubmit } = form;

  const onSubmitForm: SubmitHandler<GameDto> = (data) => {
    console.log(data);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Step 1</StepLabel>
          <StepContent>
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormLabel>
                <FormTextField
                  name="name"
                  control={control}
                  label="Name"
                  rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 100,
                  }}
                />
              </FormLabel>

              <FormTextField
                name="description"
                control={control}
                label="Description"
                rows={6}
                rules={{
                  required: true,
                  minLength: 2,
                  maxLength: 1000,
                }}
              />

              <MobileDateTimePicker label="Start date" />
              <MobileDateTimePicker label="End date" />

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    Continue
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
          <StepContent>
            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormLabel>
                <FormTextField
                  name="name"
                  control={control}
                  label="Name"
                  rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 100,
                  }}
                />
              </FormLabel>

              <FormTextField
                name="description"
                control={control}
                label="Description"
                rows={6}
                rules={{
                  required: true,
                  minLength: 2,
                  maxLength: 1000,
                }}
              />

              <MobileDateTimePicker label="Start date" />
              <MobileDateTimePicker label="End date" />

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    Continue
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </form>
  );
}
