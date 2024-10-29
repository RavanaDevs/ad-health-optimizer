"use client"
import { useState } from 'react';
import BasicData from './sections/basic-data';
import TitleDescription from './sections/title-and-description';
import ImageUpload from './sections/image';
import PersonalInformation from './sections/personal-info';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="p-6 max-w-lg mx-auto h-[400px] w-[550px] bg-white rounded-md shadow-md">
      {currentStep === 1 && <BasicData onNext={nextStep} />}
      {currentStep === 2 && <TitleDescription onNext={nextStep} onBack={prevStep} />}
      {currentStep === 3 && <ImageUpload onNext={nextStep} onBack={prevStep} />}
      {currentStep === 4 && <PersonalInformation onBack={prevStep} />}
    </div>
  );
};

export default MultiStepForm;
