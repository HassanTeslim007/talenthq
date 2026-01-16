import TalentHQWebsite from '../components/talentHq/talentHq';
import { Link } from 'react-router-dom';

function TalentHQPage() {
    return (
        <div>
            {/* Back to Learning Hub Link */}
            <div className="fixed top-4 left-4 z-50">
                <Link
                    to="/"
                    className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition text-blue-600 font-semibold flex items-center gap-2"
                >
                    ← Back to Learning Hub
                </Link>
            </div>

            {/* TalentHQ Website */}
            <TalentHQWebsite />
        </div>
    );
}

export default TalentHQPage;
