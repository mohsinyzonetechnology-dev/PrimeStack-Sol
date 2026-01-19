// stores/useKioskStore.ts - COMPLETELY REWRITE
import { create } from 'zustand';

type Step = 'START' | 'FORM' | 'THANK_YOU';

interface KioskState {
  step: Step;
  language: 'en' | 'es';
  isSubmitted: boolean;
  form: any; // Temporary - phir optimize karenge
}

interface KioskActions {
  setStep: (step: Step) => void;
  setLanguage: (lang: 'en' | 'es') => void;
  setIsSubmitted: (status: boolean) => void;
  resetApp: () => void;
  // New: Fast form updates
  updateFormField: (field: string, value: any) => void;
}

const initialFormState = {
  fName: '', mName: '', lName: '', phone: '', email: '',
  street: '', city: '', state: '', zip: '', authorized: '', 
  license: '', availability: [], yearsExp: '', expDesc: '', 
  primaryExp: [], tools: [], otherTool: '', otherTool2: '', 
  heavyEquipment: '', ownTools: '', employer: '', dateStart: '', 
  dateEnd: '', supervisor: '', supPhone: '', reason: '', 
  ref1Name: '', ref1Company: '', ref1Phone: '', ref1Rel: '', 
  ref2Name: '', ref2Company: '', ref2Phone: '', ref2Rel: '',
  roofingYears: '', plumbingYears: '', additionalInfo: '', 
  isCertified: false
};

export const useKioskStore = create<KioskState & KioskActions>((set) => ({
  // State
  step: 'START',
  language: 'en',
  isSubmitted: false,
  form: initialFormState,
  
  // Actions - OPTIMIZED
  setStep: (step) => set({ step }),
  
  setLanguage: (lang) => {
    // Direct update without causing unnecessary re-renders
    set((state) => {
      if (state.language === lang) return state; // Skip if same
      return { language: lang };
    });
  },
  
  setIsSubmitted: (status) => set({ isSubmitted: status }),
  
  resetApp: () => set({ 
    step: 'START', 
    isSubmitted: false,
    form: initialFormState 
  }),
  
  // OPTIMIZED FORM UPDATE - Only updates specific field
  updateFormField: (field, value) => {
    set((state) => ({
      form: {
        ...state.form,
        [field]: value
      }
    }));
  },
}));

// Selectors for better performance
export const useStep = () => useKioskStore((state) => state.step);
export const useLanguage = () => useKioskStore((state) => state.language);
export const useIsSubmitted = () => useKioskStore((state) => state.isSubmitted);
export const useForm = () => useKioskStore((state) => state.form);
export const useFormField = (field: string) => 
  useKioskStore((state) => state.form[field]);