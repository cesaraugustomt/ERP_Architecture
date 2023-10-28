interface PatientProps {
  params: {
    id: string;
  };
}

export default function Patient({ params }: PatientProps) {
  return <h1>Patient: {params.id}</h1>;
}
